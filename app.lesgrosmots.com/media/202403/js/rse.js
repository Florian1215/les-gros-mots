$(function () {
    const stayCleanVideo = $('#stayCleanVideo')
    const $video = stayCleanVideo.find('video');
    const video = $video[0];
    const $canvas = stayCleanVideo.find('canvas');
    const canvas = $canvas[0];
    const ctx = $canvas[0].getContext('2d');

    let playing = false;
    let animationFrame;

    video.load();
    $video.one('loadedmetadata', function () {
        video.currentTime = 0;
    });
    $video.one('seeked', function () {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    });

    function renderFrame() {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        if (!video.paused && !video.ended)
            animationFrame = requestAnimationFrame(renderFrame);
    }

    $('#stayCleanBtn').on('click', function () {
        if (!playing) {
            video.play();
            renderFrame();
            playing = true;
        } else {
            video.pause();
            cancelAnimationFrame(animationFrame);
            playing = false;
        }
    });
});

// hide video controls

setTimeout(function () {
    let myVideo = document.getElementById("rse-video-agence");
    myVideo.style.opacity = 1;
}, 1000);

setTimeout(function () {
    let myVideo = document.getElementById("rse-video-promo");
    myVideo.style.opacity = 1;
}, 1000);

// YAY
$("#rse-anim-yay").css("pointer-events", "none");
$("#rse-anim-yay").css("opacity", "100");
$("#rse-anim-yay").css("visibility", "hidden");
$("#rse-anim-contour").css("pointer-events", "none");
$("#rse-anim-contour").css("opacity", "100");
$("#rse-anim-contour").css("visibility", "hidden");
$("#rse-button-yay-coupdetat").on("click", function () {
    $("#rse-anim-yay").css("visibility", "visible");
    $("#rse-anim-contour").css("visibility", "visible");
    setTimeout(function () {
        $("#rse-anim-yay").css("visibility", "hidden");
        $("#rse-anim-contour").css("visibility", "hidden");
    }, 3000);
});

// ANIM TAMPON
const animTampon = document.getElementById("rse-anim-tampon");
const animTamponLastframe = document.getElementById("rse-anim-tampon-lastframe");
const buttonTampon = document.getElementById("rse-button-tampon");
const animSrc = animTampon.src;
var animTamponRunning = false;
$(animTamponLastframe).css("pointer-events", "none");
$(animTampon).css("pointer-events", "none");
$(animTampon).css("opacity", "0");
$(buttonTampon).on("click", function () {
    if (animTamponRunning)
        return ;
    animTamponRunning = true;
    animTampon.src = "";
    $(animTampon).css("opacity", "1");
    animTampon.src = animSrc;
    $(animTamponLastframe).css("opacity", "0");
    setTimeout(function () {
        $(animTampon).css("opacity", "0");
        $(animTamponLastframe).css("opacity", "1");
        animTamponRunning = false;
    }, 2900);
});

// ANIM GUN MONEY
const gif = $('#andmoney-gif');
let animMoneyGun = false;

$('#rse-button-yay-andmoney').on('click', function () {
    if (animMoneyGun)
        return ;
    animMoneyGun = true;
    gif.prop('src', 'https://cdn.prod.website-files.com/62014dd97e014e5a161f0175/684edcc354248556ce2efc39_money-gun-animation.gif');
    setTimeout(function () {
        gif.prop('src', 'https://cdn.prod.website-files.com/62014dd97e014e5a161f0175/684edc2766233c779849b742_gun-animation-first-image.gif')
        animMoneyGun = false;
    }, 4400);
})
