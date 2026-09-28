$(document).ready(function () {
    // Gestion du resizable des éléments
    $('.resizable').each(function() {
        $(this).resizable({
            handles: 'se, s, e',
            start: function(event, ui) {
                moveToFront($(this));
                $('body').css('cursor', '');
            },
            resize: function(event, ui) {
                const folderGroupHeight = $('.window-group').height();
                $('.open-window').height(folderGroupHeight - 40);
                $('body').css('cursor', currentCursorStyle);
            },
            stop: function(event, ui) {
                $('body').css('cursor', '');
            }
        });
    });
});

