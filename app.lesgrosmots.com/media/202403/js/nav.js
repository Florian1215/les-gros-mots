// Racine media/202403/ déduite du src du script (fonctionne en file:// comme en http)
var MEDIA_BASE = document.currentScript.src.replace(/js\/[^\/]*$/, "");
let windowHelpN = 1;
let windowHelpNLoop = 1;
const audio = new Audio(MEDIA_BASE + "error.mp3");

function moveToFront(window) {
    $('.draggable').each(function () {
        if ($(this).hasClass('front-z')) {
            $(this).removeClass('front-z');
            this.style.zIndex = '499';
        }
        else
            this.style.zIndex = this.style.zIndex - 1;
    });
    window.addClass('front-z');
}

function removeHide(window) {
    window.removeClass('hide');
    setTimeout(function () {
        moveToFront(window);
    }, 10);
}

function showWindow(windowId) {
    removeHide($('#' + windowId))
}

function showHelp() {
    const windowHelpId = 'windowHelp' + windowHelpN;
    const windowHelp = $('#' + windowHelpId);

    if (windowHelp.length <= 0) {
        if (windowHelpN === 1)
            return ;
        windowHelpN = 1;
        windowHelpNLoop++;
        return showHelp();
    }
    if (windowHelp.hasClass('hide'))
        showWindow(windowHelpId);
    else {
        const clone = windowHelp.clone();
        const currentLeft = parseInt(windowHelp.css('left')) || 0;
        const currentTop = parseInt(windowHelp.css('top')) || 0;

        clone.attr('id', windowHelpId + '_' + windowHelpNLoop);
        clone.css({
            left: (currentLeft + (30 * (windowHelpNLoop - 1))) + 'px',
            top: (currentTop + (30 * (windowHelpNLoop - 1))) + 'px'
        });
        windowHelp.after(clone);
        init_window(clone);
        removeHide(clone);
        clone.find('.home-help-button').on('click', function () {
            showHelp();
        });
    }
    windowHelpN++;
}

function afficherHeure() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let secondes = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    secondes = secondes < 10 ? '0' + secondes : secondes;

    const heureActuelle = hours + ' : ' + minutes + ' : ' + secondes;

    $('time').text(heureActuelle);
}

function init_window(window) {
    window.on('click', function () {
        moveToFront(window);
    });
    window.css('z-index', 500);
    window.draggable({
        containment: '.limit',
        zIndex: 500,
        handle: window.find('.color-bar'),
        start: function () {
            moveToFront(window);
            $('body').css('cursor', '');
        },
        stop: function () {
            $('body').css('cursor', '');
            moveToFront(window);
        },
        drag: function () {}
    });
}

$(document).ready(function () {
    //////////////////////////////
    //          WINDOW          //
    //////////////////////////////
    // Draggable
    $('.draggable').each(function () {
        init_window($(this));
    });


    const page = window.location.pathname.split('/').pop();
    if (page !== 'rse') {
        // Bouton fermeture
        $('.ico-micro-croix:not(.not-possible)').on('click', function () {
            $(this).closest('.draggable').addClass('hide');
        });

        // Bouton minimiser
        $('.ico-micro-tiret:not(.not-possible)').on('click', function () {
            // $(this).css('transition', 'width 200ms, height 200ms, left 200ms, top 200ms, opacity 300ms'); todo
            $(this).closest('.draggable').addClass('hide');
        });
    }

    $('#okBtnReglage').on('click', function() {
        $('#windowReglages').addClass('hide');
    });

    $('#btnSorry').on('click', function() {
        $('#windowEteindre').addClass('hide');
    });

    $('.not-possible, .ico-micro-carre').on('click', function () {
        $(this).closest('.draggable').effect("shake", {times: 2, distance: 10, direction: "left"}, 200);
        audio.play();
    });


    // Phototheque
    $('#phototeque').on('click', function () {
        showWindow('windowPhototeque');
    });
    $('.phototeque-subfolder-item')
        .on('click', function () {
            const selectedSubfolders = $('.phototeque-subfolder-item.selected');

            selectedSubfolders.find('img').attr('src', 'https://cdn.prod.website-files.com/62014dd97e014e5a161f0175/65aa75051158fa9bc184d824_folder-close.webp');
            $(this).find('img').attr('src', 'https://cdn.prod.website-files.com/62014dd97e014e5a161f0175/65aa75055aa7ad8ab27c4dc1_folder-open.webp');

            const folderName = $(this).find('.txt-folder').text();

            loadFolder(folderName);
            selectedSubfolders.removeClass('selected');
            $(this).addClass('selected');
        })
        .on('mouseenter', function () {
            $(this).find('.txt-folder').addClass('blue-highlight');
        })
        .on('mouseleave', function () {
            $(this).find('.txt-folder').removeClass('blue-highlight');
        })

    const photos = {
        _Agency: [
            'agency_01.jpg',
            'agency_02.jpg',
            'agency_03.jpg',
            'agency_04.JPG',
            'agency_05.jpg',
            'agency_06.JPG',
            'agency_07.jpg',
            'agency_08.jpg'
        ],
        _Studio: [
            'studio_01.PNG',
            'studio_02.PNG',
            'studio_03.PNG',
            'studio_04.png',
            'studio_05.png',
            'studio_06.png',
            'studio_07.png',
            'studio_08.PNG'
        ],
        _Life: [
            'life_01.jpg',
            'life_02.jpg',
            'life_03.JPG',
            'life_04.jpg',
            'life_05.JPG',
            'life_06.JPG',
            'life_07.jpeg',
            'life_08.PNG'
        ]
    };

    let currentFolder = '_Agency';
    let currentIndex = 0;
    const previewContainer = $('.phototeque-preview-container');

    function getPic(imgs, index=null) {
        let img;

        if (index === null)
            img = imgs;
        else
            img = imgs[index];
        return MEDIA_BASE + 'phototeque/' + img;
    }
    function loadFolder(folderName) {
        const imgs = photos[folderName];

        currentFolder = folderName;
        currentIndex = 0;
        previewContainer.empty();
        imgs.forEach((src, idx) => {
            const img = $('<div class="phototeque-image"></div>');

            img
                .css('background-image', 'url("' + getPic(src) + '")')
                .on('click', function () { showImage(idx); });
            previewContainer.append(img);
        });
        showImage(0);
    }
    function showImage(index) {
        const imgs = photos[currentFolder];
        if (imgs[index]) {
            currentIndex = index;
            $('.phototeque-main-new-img').css('background-image', 'url("' + getPic(imgs, index) + '")');
        }
    }

    function showRandomImage() {
        const imgs = photos[currentFolder];
        const randIndex = Math.floor(Math.random() * imgs.length);

        showImage(randIndex);
    }

    $('.button-phototeque.left').on('click', function () {
        const scrollVal = previewContainer.scrollLeft();

        previewContainer.animate({ scrollLeft: scrollVal - 100 }, 300);
    });

    $('.button-phototeque.right').on('click', function () {
        const scrollVal = previewContainer.scrollLeft();

        previewContainer.animate({ scrollLeft: scrollVal + 100 }, 300);
    });

    $('#randomBtnPhototeque').on('click', showRandomImage);

    loadFolder(currentFolder);


    // Gestion du bouton "not sorry"
    $('#btnNotSorry').on('click', function () {
        $('#windowEteindre').effect('shake', {times: 3, distance: 10, direction: 'left'}, 300);
        audio.play();
    });


    // Hover les elements a l'interieur du dossier
    $('.link-sub-folder, .link-sub-folder-sanstitre, .one-folder-no-lock, .icon-dessins')
        .on('mouseenter', function () {
            $(this).find('.system-text, .app-text-hover').addClass('blue-highlight');
            })
        .on('mouseleave', function () {
            $(this).find('.system-text, .app-text-hover').removeClass('blue-highlight');
        });


    //  Le jeu tamamochi
    const uiTamaCoeur = document.getElementById('ui-tama-coeur');// mon ui
    const playCoeur = document.getElementById('play-coeur');// bouton play webflow
    const tamaCoeur = document.getElementById('tama-coeur');// la video coeur

    const uiTamaOs = document.getElementById('ui-tama-os');// mon ui
    const playOs = document.getElementById('play-os');// bouton play webflow
    const tamaOs = document.getElementById('tama-os');// la video OS

    const uiTamaZzz = document.getElementById('ui-tama-zzz');// mon ui
    const playZzz = document.getElementById('play-zzz');// bouton play webflow
    const tamaZzz = document.getElementById('tama-zzz');// la video OS

    var lastElementId;

    function toggleBackgroundImages(elementId) {
        var element = document.getElementById(elementId);
        var computedStyles = window.getComputedStyle(element);
        var currentBackground = computedStyles.getPropertyValue('background-image');

        if (lastElementId) {
            var lastElement = document.getElementById(lastElementId);
            lastElement.style.backgroundImage = window.getComputedStyle(lastElement).getPropertyValue('background-image');
        }

        var backgrounds = currentBackground.split(',');
        backgrounds.reverse();

        var newBackground = backgrounds.join(',');
        element.style.backgroundImage = newBackground;
        lastElementId = elementId;
        setTimeout(function () {
            element.style.backgroundImage = currentBackground; // Revert back to initial background
        }, 1000);
    }

    uiTamaCoeur.addEventListener("mouseover", function () {
        toggleBackgroundImages("ui-tama-coeur");
    });
    uiTamaOs.addEventListener("mouseover", function () {
        toggleBackgroundImages("ui-tama-os");
    });
    uiTamaZzz.addEventListener("mouseover", function () {
        toggleBackgroundImages("ui-tama-zzz");
    });

    function handleClickTamaCoeur() {
        playCoeur.trigger('click');
        tamaOs.style.display = 'none';
        tamaZzz.style.display = 'none';
        tamaCoeur.style.display = 'block';
        uiTamaCoeur.removeEventListener('click', handleClickTamaCoeur);
        uiTamaOs.removeEventListener('click', handleClickTamaOs);
        uiTamaZzz.removeEventListener('click', handleClickTamaZzz);
        setTimeout(() => {
            uiTamaCoeur.addEventListener('click', handleClickTamaCoeur);
            uiTamaOs.addEventListener('click', handleClickTamaOs);
            uiTamaZzz.addEventListener('click', handleClickTamaZzz);
        }, 9000);
    }
    uiTamaCoeur.addEventListener('click', handleClickTamaCoeur);

    function handleClickTamaOs() {
        playOs.trigger('click');
        tamaCoeur.style.display = 'none';
        tamaZzz.style.display = 'none';
        tamaOs.style.display = 'block';
        uiTamaCoeur.removeEventListener('click', handleClickTamaCoeur);
        uiTamaOs.removeEventListener('click', handleClickTamaOs);
        uiTamaZzz.removeEventListener('click', handleClickTamaZzz);
        setTimeout(() => {
            uiTamaOs.addEventListener('click', handleClickTamaOs);
            uiTamaCoeur.addEventListener('click', handleClickTamaCoeur);
            uiTamaZzz.addEventListener('click', handleClickTamaZzz);
        }, 8000);
    }
    uiTamaOs.addEventListener('click', handleClickTamaOs);

    function handleClickTamaZzz() {
        playZzz.trigger('click');

        tamaCoeur.style.display = 'none';
        tamaOs.style.display = 'none';
        tamaZzz.style.display = 'block';

        uiTamaCoeur.removeEventListener('click', handleClickTamaCoeur);
        uiTamaOs.removeEventListener('click', handleClickTamaOs);
        uiTamaZzz.removeEventListener('click', handleClickTamaZzz);
        setTimeout(() => {
            uiTamaOs.addEventListener('click', handleClickTamaOs);
            uiTamaCoeur.addEventListener('click', handleClickTamaCoeur);
            uiTamaZzz.addEventListener('click', handleClickTamaZzz);
        }, 9000);
    }
    uiTamaZzz.addEventListener('click', handleClickTamaZzz);


    // Changement de background et de couleur
    const colorElements = document.querySelectorAll('.one-color');

    function handleClickColor(event) {
        const colorElement = event.currentTarget.querySelector('.color-element');
        const backgroundColor = window.getComputedStyle(colorElement).backgroundColor;

        const imagePanel = colorElement.querySelector('.image-panel');
        const computedStyle = window.getComputedStyle(imagePanel);
        const backgroundImage = computedStyle.getPropertyValue('background-image');

        save_background_and_color(backgroundImage, backgroundColor);
    }

    colorElements.forEach(colorElement => {
        colorElement.addEventListener('click', handleClickColor);
    });


    // Videotheque
    let video = $("#home-video-desk");
    let intervalIDVideotheque = null;

    $("#pause-bt").on('click', function () {
        pauseVideo()
    });
    $("#play-bt").on('click', function () {
        playVideo()
    });

    function playVideo() {
        video[0].play();
    }

    function pauseVideo() {
        video[0].pause();
    }

    function updateVideo() {
        let left = video[0].currentTime / video[0].duration * 572;
        let seconds = Math.floor(video[0].currentTime % 60);
        let milliseconds = Math.floor((video[0].currentTime % 1) * 100);
        let secondesFormat = seconds < 10 ? "0" + seconds : seconds;
        let milliFormat = milliseconds < 10 ? "0" + milliseconds : milliseconds;

        $("#video-cursor").css("left", left);
        $("#video-time").html(`${secondesFormat}:${milliFormat}`);
    }

    $('#close-movie, #reduce-movie').on('click', function () {
        pauseVideo();
    });

    video.on('play', function () {
        if (!intervalIDVideotheque) {
            intervalIDVideotheque = setInterval(updateVideo, 100);
        }
    });

    video.on('pause ended', function () {
        clearInterval(intervalIDVideotheque);
        intervalIDVideotheque = null;
    });

    $('#movie').on('click', function () {
        showWindow('windowVideoteque');
        playVideo();
    });


    //////////////////////////////
    //           MENU           //
    //////////////////////////////

    // Afficher l'heure actuelle
    setInterval(afficherHeure, 1000);
    afficherHeure();


    // Afficher/masquer le menu principal
    $('#startButton').on('click', function () {
        $('#mainMenu').removeClass('hide');
    });


    // Gère l’ouverture des sous-menus
    $('.menu-nav-item, .submenu-nav-item, .title-menu')
        .on('mouseenter', function () {
            $(this).addClass('hover');
            $(this).find('.icon-sub-menu').css('background-image', 'url("https://cdn.prod.website-files.com/62014dd97e014e5a161f0175/6847eac13cf32b5f4b00f5aa_icon-submenu-hover.png")');
        })
        .on('mouseleave', function () {
            $(this).removeClass('hover');
            $(this).find('.icon-sub-menu').css('background-image', 'url("https://cdn.prod.website-files.com/62014dd97e014e5a161f0175/6846bec5484243f47e4db023_icon-submenu.png")');
        })
        .on('click', function () {
            const windowId = $(this).data('window');
            if (windowId) {
                if (windowId === 'windowHelp')
                    showHelp();
                else
                    showWindow(windowId);
                if (windowId === 'windowNote')
                    $('.note-content').focus();
                return ;
            }

            const url = $(this).data('url');
            if (url) {
                let target;

                if (url.startsWith('/'))
                    target = '_self';
                else
                    target = '_blank';
                window.open(url, target);
            }

            const copy = $(this).data('copy');
            if (copy) {
                navigator.clipboard.writeText(copy).then(() => {});

                const windowCopyMessage = $('#copy-info');
                removeHide(windowCopyMessage);

                setTimeout(() => {
                    windowCopyMessage.addClass('hide');
                }, 2000);
            }
        });

    $('.home-help-button').on('click', function () {
        showHelp();
    });

    $('.menu-nav').on('click', function () {
        $('.menu-nav').addClass('hide');
    });

    $('.submenu-nav-item')
        .on('mouseenter', function () {
            const idSubmenu = $(this).data('submenu');

            if (idSubmenu !== 'mailSubmenu')
                $('.sub-media, .sub-jeux, .sub-contact, .sub-sub-mail').addClass('hide');
            $('#' + idSubmenu).removeClass('hide');
        })
        .on('mouseleave', function () {
            const idSubmenu = $(this).data('submenu');

            setTimeout(function() {
                if ($('#' + idSubmenu + ':hover').length <= 0) {
                    $('#' + idSubmenu).addClass('hide');
                }
            }, 60);
        });

    $('.menu-nav:not(#mainMenu)').on('mouseleave', function () {
            if ($(this).hasClass('hide'))
                return ;

            if ($(this).attr('id') === 'mailSubmenu') {
                $('#contactSubmenu').addClass('hide');
            }

            if ($(this).attr('id') === 'contactSubmenu') {
                setTimeout(function() {
                    if ($('#mailSubmenu:hover').length <= 0) {
                        $('#contactSubmenu').addClass('hide');
                    }
                }, 60);
            }
            else {
                $(this).addClass('hide');
            }
        }
    );

    // Ferme le menu si on clique ailleurs
    $(document).on('click', function (e) {
        if (!$(e.target).closest('#mainMenu, #startButton').length) {
            $('#mainMenu').addClass('hide');
        }
    });
});
