$(document).ready(function() {
    // Handle locaux window
    const iconLocaux = $('#appLocaux');
    const windowLocaux = $('#windowAgenceLocaux');

    iconLocaux
        .on('click', function() {
            removeHide(windowLocaux);
        })
        .on('mouseenter', function() {
            $(this).find('.app-text-hover').addClass('blue-highlight');
        })
        .on('mouseleave', function() {
            if (windowLocaux.hasClass('hide'))
                $(this).find('.app-text-hover').removeClass('blue-highlight');
        });

    windowLocaux.find('.ico-micro-croix').on('click', function() {
        iconLocaux.find('.app-text-hover').removeClass('blue-highlight');
    })

    // Handle hover expertise
    $('.one-left-expert')
        .on('mouseenter', function() {
            const expertiseBig = $(this).find('.expertise-big');

            expertiseBig.addClass('hover');

            const miniFolderClose = $(this).find('.mini-folder-close');
            const miniFolderOpen = $(this).find('.mini-folder-open');
            miniFolderClose.hide();
            miniFolderOpen.show();
        })
        .on('mouseleave', function() {
            const expertiseBig = $(this).find('.expertise-big');

            expertiseBig.removeClass('hover');

            const miniFolderClose = $(this).find('.mini-folder-close');
            const miniFolderOpen = $(this).find('.mini-folder-open');
            miniFolderClose.show();
            miniFolderOpen.hide();
        });

    // Handle hover clients
    const $clients = $('.one-client');
    const $logoGroups = $('.one-logo-group');

    $clients.each(function(index) {
        $(this).on('mouseenter', function() {
            $logoGroups.hide();
            $logoGroups.eq(index).show();
        });
    });
});


const oneImgLocos = document.querySelectorAll('.one-img-loco');

oneImgLocos.forEach(oneImgLoco => {
    oneImgLoco.addEventListener('click', () => {
        const locosListImage = oneImgLoco.querySelector('.locos-list').getAttribute('src');
        const fakeImgName = oneImgLoco.getAttribute('fake-img-name');

        const allLocosList = document.querySelectorAll('.locos-list');
        allLocosList.forEach(locosList => {
            locosList.classList.remove('selected');
        });

        const clickedLocosList = oneImgLoco.querySelector('.locos-list');
        clickedLocosList.classList.add('selected');

        document.getElementById('locos-big').setAttribute('src', locosListImage);
        document.getElementById('img-name').textContent = fakeImgName;
    });
});

