$(document).ready(function() {
    const apps = $('.agencespe-content-file');

    apps
        .on('click', function() {
            let target = $(this).data('target');

            for (let i = 1; i <= 4; i++) {
                let windowAgence = $('#windowAgence' + i);

                if (windowAgence.attr('id') === target) {
                    windowAgence.removeClass('hide');
                    apps.each(function() {
                        $(this).find('.app-text-hover').removeClass('blue-highlight');
                    });
                    $(this).find('.app-text-hover').addClass('blue-highlight');

                    let url, color;

                    switch (i) {
                        case 1:
                            url = 'https://cdn.prod.website-files.com/62014dd97e014e5a161f0175/65ef03fbb95157f5c4954168_65ef02a29d94c555ffce5cef_FOND_RAINBOW.webp';
                            color = '#00FF01';
                            break;
                        case 2:
                            url = 'https://cdn.prod.website-files.com/62014dd97e014e5a161f0175/682b6b45a4caab2fc2f81252_bg-agence3.jpg';
                            color = '#C88DFF';
                            break;
                        case 3:
                            url = 'https://cdn.prod.website-files.com/62014dd97e014e5a161f0175/682b6b44b6c8821f55bb3c60_bg-agence2.jpg';
                            color = '#FF7FFE';
                            break;
                        case 4:
                            url = 'https://cdn.prod.website-files.com/62014dd97e014e5a161f0175/682b6c901856b5e46b9140e3_bg-agence4.png';
                            color = '#FF361C';
                            break;
                    }
                    update_background_and_color(url, color);
                }
                else {
                    windowAgence.addClass('hide');
                }
            }

            $('#windowAgence').addClass('hide');
        })
        .on('mouseenter', function() {
            $(this).find('.app-text-hover').addClass('blue-highlight');
        })
        .on('mouseleave', function() {
            let target = $(this).data('target');

            if ($('#' + target).hasClass('hide')) {
                $(this).find('.app-text-hover').removeClass('blue-highlight');
            }
        });


    // Handle teams window
    const windowTeam = $('.window-agence-equipes');

    $('.equipes')
        .on('mouseenter', function() {
            $(this).find('.app-text-hover').addClass('blue-highlight');
            removeHide(windowTeam)
        })
        .on('mouseleave', function() {
            $(this).find('.app-text-hover').removeClass('blue-highlight');
            windowTeam.addClass('hide');
        });
});
