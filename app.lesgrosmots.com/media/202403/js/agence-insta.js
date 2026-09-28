$(document).ready(function () {
    // Handle like button
    const likeText = $('#likeNumber');

    $('#likeBtn').on('click', function(e) {
        let like = parseInt(likeText.text());
        likeText.text(like + 1);

        const heart = $('<img />', {
            src: 'https://cdn.prod.website-files.com/62014dd97e014e5a161f0175/682b354ce3767517cae49031_agence-like-img.png',
            class: 'flying-heart',
            alt: 'heart',
        });
        const heartContainer = $('.heart-container');
        const offset = heartContainer.offset();
        const x = e.pageX - offset.left + (Math.random() * 40 - 25);
        const y = e.pageY - offset.top + (Math.random() * 30 - 20);

        heart.css({left: x + 'px', top: y + 'px'});
        heartContainer.append(heart);
        setTimeout(() => {
            heart.remove();
        }, 1000);
    })


    // Handle click on insta images
    $('.img-insta').on('click', function () {
        const title = $(this).data('title');
        const imageUrl = $(this).css("background-image").replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
        let window = $('#' + title);

        if (!window.length) {
            const htmlContent = `
                <div id="${title}" class="window-agence-img-insta draggable">
                    <div class="xsmall-window2">
                        <div class="mochi-window-container">
                        <div class="color-bar secondary">
                            <div class="system-text bigger">${title}</div>
                                <div class="ico-group">
                                  <div class="ico-micro-croix">
                                </div>
                            </div>
                          </div>
                          <div class="xsmall-inside-window-neutral-6">
                            <div class="img-insta-content" style="background-image: url('${imageUrl}')"></div>
                          </div>
                        </div>
                    </div>
                </div>
              `;
            $('#windowAgence3').append(htmlContent);
            $('.color-bar').css('background-color', '#FF7FFE');

            window = $('#' + title);
            init_window(window);
            window.find('.ico-micro-croix').on('click', function () {
                window.remove();
            });
        }
        setTimeout(moveToFront, 30, window);
    });
});
