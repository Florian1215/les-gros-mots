let navWidth = $(window).width()

function moveAppToFront(item) {
    if (!item.hasClass('draggable')) {
        item.children().each(function () {
            moveToFront($(this));
        });
    }
    else
        moveToFront(item);
}

function display(item) {
    $(item).css('display', 'block');
    moveAppToFront(item)
}

function isAnyChildFront(item) {
    return item.children().toArray().some(child => $(child).hasClass('front-z'));
}

function closeApp(app, removeFromTaskbar = true) {
    if (app.hasClass('in-group'))
        app = app.parent();

    const appId = app.attr('id');
    const windowElement = $('#' + appId);

    if (windowElement.length)
        windowElement.hide();

    if (removeFromTaskbar) {
        const taskbarIcon = $('[data-taskbar-app="' + appId + '"]');

        if (taskbarIcon.length)
            taskbarIcon.remove();
    }
}
function getShortAppnNme(appName) {
    return appName.substring(0, 4) + '...';
}

function shortenedTitle(taskbar) {
    let reduce = 0;

    // Réduire les titres longs
    taskbar.children().each(function () {
        const text = $(this).find('.taskbar-text');

        if (text.length && text.text() && !text.text().includes('...')) {
            reduce = (text.text().length - 7) * 8;
            text.text(getShortAppnNme(text.text()));
            return false;
        }
    });

    if (reduce > 0)
        return reduce;

    // Si tous sont déjà raccourcis, enlever les titres
    taskbar.children().each(function () {
        const text = $(this).find('.taskbar-text');

        if (text.text()) {
            text.text('');
            reduce = 60;
            return false;
        }
    });

    if (reduce > 0)
        return reduce;

    if (taskbar.children().length === 0)
        return reduce;

    const windowId = taskbar.children()[0].dataset.taskbarApp;
    closeApp($('#' + windowId));
    return 60;
}

function getActualWidth(taskbar) {
    let actualWidth = 0;

    taskbar.children().each(function () {
        actualWidth += $(this).innerWidth() + 15;
    });

    return actualWidth;
}

function formatAppTitle(taskbar, title) {
    const taskbarWidth = taskbar.innerWidth();
    let actualWidth = getActualWidth(taskbar);

    const newItemWidth = (title.length * 8) + 55;
    const smallNewItemWidth = 90;

    if (actualWidth + newItemWidth > taskbarWidth) {
        if (actualWidth + smallNewItemWidth < taskbarWidth) {
            return getShortAppnNme(title);
        }
        for (let i = 0; i < 20; i++) {
            if (actualWidth + smallNewItemWidth < taskbarWidth)
                break ;
            actualWidth -= shortenedTitle(taskbar);
        }
        if (actualWidth + newItemWidth < taskbarWidth)
            return title;
        if (actualWidth + smallNewItemWidth < taskbarWidth)
            return getShortAppnNme(title);
        return '';
    }
    return title;
}

function adjustTaskbar(taskbar, windowWidth) {
    if (windowWidth < 992)
        return ;

    if (windowWidth < navWidth) {
        const taskbarWidth = taskbar.innerWidth();
        let actualWidth = getActualWidth(taskbar);

        if (actualWidth > taskbarWidth) {
            for (let i = 0; i < 20; i++) {
                if (actualWidth < taskbarWidth)
                    break ;
                actualWidth -= shortenedTitle(taskbar);
            }
        }
    }
    navWidth = windowWidth;
}

$(document).ready(function () {
    const taskbar = $('#taskbar');

    // Initialisation des apps et des fenêtres
    $('[data-app-name]').each(function () {
        const appId = $(this).attr('data-app-id');
        const windowElement = $('#' + appId);

        $(this).on('click', function () {
            const appName = $(this).attr('data-app-name');
            const appIcon = $(this).attr('data-app-icon');

            if (windowElement.length) {
                display(windowElement);
                setTimeout(moveAppToFront, 30, windowElement);

                if (taskbar.find('[data-taskbar-app="' + appId + '"]').length === 0) {
                    const taskbarIcon = $('<div>')
                        .addClass('taskbar-item')
                        .attr('data-taskbar-app', appId)
                        .on('click', function () {
                            if (windowElement.css('display') === 'none')
                                display(windowElement);
                            else
                                if ((windowElement.hasClass('draggable') && windowElement.hasClass('front-z')) || isAnyChildFront(windowElement))
                                    windowElement.hide();
                                else
                                    moveAppToFront(windowElement);
                        });

                    const icon = $('<img>')
                        .addClass('taskbar-icon')
                        .attr('src', 'https://cdn.prod.website-files.com/62014dd97e014e5a161f0175/' + appIcon + '.png');

                    const text = $('<div>')
                        .addClass('taskbar-text')
                        .text(formatAppTitle(taskbar, appName));

                    taskbarIcon.append(icon).append(text);
                    taskbar.append(taskbarIcon);
                }
            }
        })
    });

    $(window).on('resize', function () {
        adjustTaskbar(taskbar, $(window).width());
    });


    // Boutons fermer
    $('.ico-micro-croix:not(.not-possible)').on('click', function () {
        if (!$(this).parent().hasClass('not-possible')) {
            closeApp($(this).closest('div[id]'))
        }
    });


    // Boutons minimiser
    $('.ico-micro-tiret:not(.not-possible)').each(function () {
        if (!$(this).parent().hasClass('not-possible')) {
            $(this).on('click', function () {
                closeApp($(this).closest('div[id]'), false)
            });
        }
    });


    // Gestion du redimensionnement
    $('.resizable').each(function() {
        $(this).resizable({
            handles: 'se, s, e',
            start: function(event, ui) {
                moveToFront($(this));
                $('body').css('cursor', '');
            },
            resize: function(event, ui) {
                $('body').css('cursor', currentCursorStyle);
            },
            stop: function(event, ui) {
                $('body').css('cursor', '');
            }
        });
    });
});
