$(document).ready(function () {
    $('.agence-notes').on('click', function () {
        const windowNote = $('.window-agence-note');
        removeHide(windowNote);

        const note = $(this).data('note');
        const notewindow = $('#' + note);

        if (notewindow.length) {
            $('.agence2-notes-container').addClass('hide');
            notewindow.removeClass('hide');
        }
    });

    $('.agence-btn-note').on('click', function () {
        const cmd = $(this).data('cmd');
        const highlightColor = $(this).data('highlight');

        if (cmd)
            document.execCommand(cmd, false, null);
        else if (highlightColor)
            document.execCommand('hiliteColor', false, highlightColor);
    });
});
