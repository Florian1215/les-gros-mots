function update_background_and_color(image, color) {
    $('.color-bar:not(.note), .color-bar-greg').each(function () {
        $(this).css('background-color', color);
    });
    document.body.style.backgroundImage = `url(${image})`;
}

function save_background_and_color(image, color) {
    let imageUrl;

    if (image && image !== 'none')
        imageUrl = image.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
    else
        imageUrl = null;

    sessionStorage.setItem('imageUrl', imageUrl);
    sessionStorage.setItem('backgroundColor', color);
    update_background_and_color(imageUrl, color);
}

$(document).ready(function () {
    const color = sessionStorage.getItem('backgroundColor') || "#00ff3d";
    let image = sessionStorage.getItem('imageUrl');

    if (!image)
        image = 'https://cdn.prod.website-files.com/62014dd97e014e5a161f0175/65ef03fbb95157f5c4954168_65ef02a29d94c555ffce5cef_FOND_RAINBOW.webp';
    update_background_and_color(image, color);
})
