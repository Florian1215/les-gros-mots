function moveToFrontTeam(window) {
    $('.one-team-ele').each(function () {
        this.style.zIndex = this.style.zIndex - 1;
    });
    if (window instanceof jQuery)
        window.css('z-index', 100);
    else
        window.style.zIndex = 100;
}

$(document).ready(function () {
    // Fenetre news
    const newsWindow = $('#windowNews');
    const imageNews = $('#homePhoneImage');
    let intervalIDNews = null;
    let openNews = false;

    intervalIDNews = setInterval(function() {
        newsWindow.effect("shake", {times: 3, distance: 10, direction: "left"}, 300);
    }, 2000);

    $('#openNewsBtn').on('click', function () {
        if (!openNews) {
            openNews = true;
            clearInterval(intervalIDNews);
            imageNews.removeAttr('srcset');
            imageNews.attr('src', 'https://cdn.prod.website-files.com/62014dd97e014e5a161f0175/684d500ca38e9d3ced7c9559_gif-news-open-phone.gif');
            setTimeout(() => {
                window.location.href = "/agence";
            }, 1000);
        }
    });


    // Gestion des fenetres sanstitre
    $('#snake').on('click', function () {
        showWindow('windowMochisnake');
    })

    $('#private').on('click', function () {
        if ($('body').hasClass('key-cursor')) {
            let timeout = 200;

            $('.spam-element').each(function(index, spamElement) {
                timeout = timeout + 200;

                setTimeout(() => {
                    removeHide($(this));
                }, timeout);
            });
        }
        else
            showWindow('key-info');
    })

    $('#close-key-two').on('click', function () {
        $('#key-info').addClass('hide');
    })

    // Hover les icons
    $('.one-team-ele, .trash-wrap')
        .on('mouseenter', function () {
            $(this).find('.team-txt').css('opacity', '1');
        })
        .on('mouseleave', function () {
            $(this).find('.team-txt').css('opacity', '0');
        });


    // Evenement sur un membre de l'équipe
    $('.one-team-ele').each(function() {
        $(this).css('z-index', 100);
        $(this).on('click', function() {
            moveToFrontTeam($(this));
        });

        let isDragging = false;
        let startX, startY;

        $(this).draggable({
            containment: $('.limit'),
            start: function(event, ui) {
                moveToFrontTeam(this);
                isDragging = true;
                startX = event.pageX;
                startY = event.pageY;
                $('body').css('cursor', '');
            },
            stop: function(event, ui) {
                var windowWidth = $(window).width();
                var positionX_vw = (ui.position.left / windowWidth) * 100;

                $(this).css('left', positionX_vw + 'vw');
                isDragging = false;
                $('body').css('cursor', '');
            }
        });

        $(this).on('dblclick', function(event) {
            if (!isDragging) {
                window.location.href = "/equipe";
            }
            isDragging = false;
        });
    });


    // Click sur les dossiers
    $('#medias, #sans-titre').on('click', function () {
        const img = $(this).find('img');
        const folderWindow = $('#' + $(this).data('window'));

        img.attr('src', 'https://cdn.prod.website-files.com/62014dd97e014e5a161f0175/65cf770a0eecf7701b4ae00c_open-folder.webp');
        folderWindow.find('.ico-micro-croix, .ico-micro-tiret').on('click', function () {
            img.attr('src', 'https://cdn.prod.website-files.com/62014dd97e014e5a161f0175/65cf771a0d51baade09893dd_close-folder.webp');
        })

        if (!folderWindow.hasClass('hide'))
            moveToFront(folderWindow);
        else
            removeHide(folderWindow);
    });


    // Ouverture et gestion des poubelles
    let emptyTrash= {'green': false, 'blue': false, 'yellow': false};
    const trashSound = new Audio('/procraste-nobel.com/LGM-JAVASCRIPT/sounds/window-corbeille.mp3');

    $('.trash-wrap').on('click', function() {
        $('.trash-menu').addClass('hide');
        removeHide($(this).find('.trash-menu'))
    });

    $('.trash-menu .menu-block').on('click', function() {
        const action = $(this).data('action');
        const trashColor = $(this).data('color');
        const parentId = $(this).parent().attr('id');

        setTimeout(function () {
            $('#' + parentId).addClass('hide');
        }, 100);

        if (action === 'empty') {
            if (emptyTrash[trashColor])
                return ;
            const parentWindow = $('#' + trashColor + '-trash-open');
            const parentIcon = $('#' + trashColor + '-trash');

            parentWindow.find('.trash-content-delete').hide();
            parentWindow.find('.trash-content-empty').show();
            moveToFront(parentWindow);
            trashSound.play();
            parentIcon.find('.trash-full').hide();
            parentIcon.find('.trash-empty').show();
            emptyTrash[trashColor]= true;
        }
        else
            showWindow(trashColor + '-trash-open');
    })

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.trash-wrap').length)
            $('.trash-menu').addClass('hide');
    });
});

function afficherSplashScreen() {
    document.querySelector('.splash-screen').style.display = 'block';
}

window.addEventListener('load', afficherSplashScreen);
