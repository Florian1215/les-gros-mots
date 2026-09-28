// Racine media/202403/ déduite du src du script (fonctionne en file:// comme en http)
var MEDIA_BASE = document.currentScript.src.replace(/js\/[^\/]*$/, "");
const cursorMap = {
    brush: 'url("' + MEDIA_BASE + 'paint-tools/pencil.png") 8 28, auto',
    pencil: 'url("' + MEDIA_BASE + 'paint-tools/bombe.png") 14 14, auto',
    highlighter: 'url("' + MEDIA_BASE + 'paint-tools/brush.png") 15 25, auto',
    eraser: 'url("' + MEDIA_BASE + 'paint-tools/gomme.png") 6 20, auto',
    bucket: 'url("' + MEDIA_BASE + 'paint-tools/peinture.png") 10 14, auto',
    text: 'text',
    line: 'crosshair',
    rect: 'crosshair',
    ellipse: 'crosshair'
};

$(function () {
    // Handle dessins window
    const iconDessins = $('#iconDessins');
    const windowDessins = $('#windowAgenceDessins');

    iconDessins.on('click', function () {
        iconDessins.find('.agence-img-dessins').attr('src', 'https://cdn.prod.website-files.com/62014dd97e014e5a161f0175/682e87f1533a5c62b47ba47b_icon-open-folder-agence.png');

        windowDessins.find('.ico-micro-croix').on('click', function () {
            windowDessins.addClass('hide');
            iconDessins.find('.agence-img-dessins').attr('src', 'https://cdn.prod.website-files.com/62014dd97e014e5a161f0175/682e87f1462bb62bf5d5f208_icon-folder-agence.png');
        })
        removeHide(windowDessins);
    });

    $('.save-dessin')
        .on('mouseenter', function () {
            $(this).find('.app-text-hover').addClass('blue-highlight');
        })
        .on('mouseleave', function () {
            $(this).find('.app-text-hover').removeClass('blue-highlight');
        });


    // Handle draw window
    let container = $('#drawCanva');
    let main = null;
    let temp = null;
    let mctx;
    let tctx;
    let currentTool = 'pencil';
    let drawing = false;
    let textMode = false;
    let startX, startY;
    let color = '#000000';
    let lineWidth = 1;
    let history = [], historyStep = -1;
    let caretInterval, caretVisible, previewText;
    let fontSize = 24;
    let w = 394;
    let h = 270;

    // Palette de couleurs
    let colors = $('.draw-color');


    function initCanva() {
        container.html('<canvas id="mainCanvas"></canvas><canvas id="tempCanvas"></canvas>');
        main = document.getElementById('mainCanvas');
        temp = document.getElementById('tempCanvas');
        mctx = main.getContext('2d');
        tctx = temp.getContext('2d');

        const tempCanvas = $('#tempCanvas');
        tempCanvas.on('mousedown', function (e) {
            if (!main)
                initCanva();
            if (currentTool === 'text' && !textMode) {
                textMode = true;
                startX = e.offsetX;
                startY = e.offsetY;
                previewText = '';
                caretVisible = true;
                tctx.clearRect(0, 0, temp.width, temp.height);
                tctx.font = fontSize + 'px sans-serif';
                drawTextPreview();
                caretInterval = setInterval(function () {
                    caretVisible = !caretVisible;
                    drawTextPreview();
                }, 500);
                $(document).on('keydown.textTool', function (ev) {
                    if (!textMode)
                        return;
                    if (ev.key === 'Enter' || ev.key === 'Escape') {
                        mctx.fillStyle = color;
                        mctx.font = fontSize + 'px sans-serif';
                        mctx.fillText(previewText, startX, startY + fontSize);
                        disableTextMode();
                        saveState();
                    }
                    else {
                        if (ev.key === 'Backspace') previewText = previewText.slice(0, -1); else if (ev.key.length === 1)
                            previewText += ev.key;
                        drawTextPreview();
                    }
                });
                return;
            }
            if (currentTool !== 'text') {
                e.preventDefault();
                drawing = true;
                startX = e.offsetX;
                startY = e.offsetY;
                if (['pencil', 'brush', 'highlighter', 'eraser'].includes(currentTool)) {
                    mctx.beginPath();
                    mctx.moveTo(startX, startY);
                }
                else if (currentTool === 'bucket') {
                    saveState();
                    floodFill(startX, startY);
                    drawing = false;
                }
            }
        });
        tempCanvas.on('mousemove', function (e) {
            if (!main)
                initCanva();
            if (!drawing)
                return;

            let x = e.offsetX, y = e.offsetY;

            tctx.clearRect(0, 0, temp.width, temp.height);
            switch (currentTool) {
                case 'pencil':
                    for (let i = 0; i < 7; i++) {
                        let offsetX = (Math.random() - 0.5) * 13;
                        let offsetY = (Math.random() - 0.5) * 13;
                        let alpha = Math.random();

                        mctx.fillStyle = hexToRgbaString(color, alpha);
                        mctx.beginPath();
                        mctx.arc(x + offsetX, y + offsetY, 1, 0, 2 * Math.PI);
                        mctx.fill();
                    }
                    break;
                case 'brush':
                case 'highlighter':
                    mctx.lineTo(x, y);
                    mctx.stroke();
                    break;
                case 'eraser':
                    mctx.globalCompositeOperation = 'destination-out';
                    mctx.lineTo(x, y);
                    mctx.stroke();
                    mctx.globalCompositeOperation = 'source-over';
                    break;
                case 'line':
                    tctx.strokeStyle = color;
                    tctx.lineWidth = 2;
                    tctx.beginPath();
                    tctx.moveTo(startX, startY);
                    tctx.lineTo(x, y);
                    tctx.stroke();
                    break;
                case 'rect':
                    tctx.strokeStyle = color;
                    tctx.lineWidth = 2;
                    tctx.strokeRect(startX, startY, x - startX, y - startY);
                    break;
                case 'ellipse':
                    tctx.strokeStyle = color;
                    tctx.lineWidth = 2;
                    tctx.beginPath();
                    tctx.ellipse((startX + x) / 2, (startY + y) / 2, Math.abs(x - startX) / 2, Math.abs(y - startY) / 2, 0, 0, 2 * Math.PI);
                    tctx.stroke();
                    break;
            }
        });

        main.width = w;
        main.height = h;
        temp.width = w;
        temp.height = h;
        saveState();
        colors.first().trigger('click');
        $('.btn-draw-tools').filter('[data-tool="brush"]').trigger('click');
    }

    container.on('click', function () {
        if (!main)
            initCanva();
    });

    colors.on('click', function () {
        if (!main)
            initCanva();
        $('.draw-color').removeClass('active');
        $(this).addClass('active');
        color = $(this).data('color');
        mctx.strokeStyle = color;
        mctx.fillStyle = color;
        $('.draw-2colors-color.col-active')
            .css('background-color', color)
            .data('color', color);
    });

    $('.draw-2colors-color').on('click', function () {
        if (!main)
            initCanva();
        if ($(this).hasClass('col-active'))
            return;
        color = $(this).data('color');
        $('.draw-2colors-color.col-active').removeClass('col-active');
        $(this).addClass('col-active');
        mctx.strokeStyle = color;
        mctx.fillStyle = color;
    })

    // Sélection d'outil
    $('.btn-draw-tools').on('click', function () {
        if (!main)
            initCanva();
        if (textMode)
            disableTextMode();
        if (!$(this).data('tool'))
            return ;
        $('.btn-draw-tools').removeClass('active');
        $(this).addClass('active');
        currentTool = $(this).data('tool');
        $('canvas').css('cursor', cursorMap[currentTool]);
        drawing = false;
        // Reset compositing
        mctx.globalCompositeOperation = 'source-over';
        mctx.globalAlpha = 1;
        mctx.lineCap = 'round';
        switch (currentTool) {
            case 'brush':
                lineWidth = 4;
                break;
            case 'pencil':
                lineWidth = 1;
                break;
            case 'highlighter':
                lineWidth = 15;
                mctx.globalCompositeOperation = 'multiply';
                mctx.globalAlpha = 0.3;
                mctx.lineCap = 'butt';
                break;
            case 'eraser':
                lineWidth = 5;
                mctx.globalCompositeOperation = 'destination-out';
                break;
            default:
                lineWidth = 2;
        }
        mctx.strokeStyle = (currentTool === 'eraser' ? 'rgba(0,0,0,1)' : color);
        mctx.fillStyle = color;
        mctx.lineWidth = lineWidth;
    });

    // Historique
    function saveState() {
        history = history.slice(0, historyStep + 1);
        history.push(main.toDataURL());
        historyStep++;
    }

    function restore(step) {
        let img = new Image();

        img.src = history[step];
        img.onload = function () {
            mctx.clearRect(0, 0, main.width, main.height);
            mctx.drawImage(img, 0, 0);
        };
    }

    $('#undo').on('click', function () {
        if (!main)
            initCanva();
        if (historyStep > 0)
            restore(--historyStep);
    });
    $('#redo').on('click', function () {
        if (!main)
            initCanva();
        if (historyStep < history.length - 1)
            restore(++historyStep);
    });
    $('#clearAll').on('click', function () {
        if (!main)
            initCanva();
        saveState();
        mctx.clearRect(0, 0, main.width, main.height);
    });

    // Export et sauvegarde
    $('#export').on('click', function () {
        if (!main)
            initCanva();
        let link = document.createElement('a');

        link.download = 'canvas.png';
        link.href = main.toDataURL();
        link.trigger('click');
    });

    $('#save').on('click', function () {
        if (!main)
            initCanva();
        let data = main.toDataURL();

        // Enregistrement dans localStorage
        const saves = JSON.parse(localStorage.getItem('drawings') || '[]');
        saves.push(data);
        localStorage.setItem('drawings', JSON.stringify(saves));

        // Ajout visuel
        addSavedDrawing(data, saves.length);
    });

    function addSavedDrawing(data, n) {
        if (!main)
            initCanva();
        let dessinsContent = $('#dessinsContent');
        let saveDraw = $('<div class="save-dessin">' +
                '<img src="https://cdn.prod.website-files.com/62014dd97e014e5a161f0175/682cea342c1f5d3b42d25971_file-icon-dessin.png" loading="lazy" alt="">' +
                `<div class="title-save-dessins"><span class="app-text-hover">${n}.png</span></div>` +
            '</div>');

        saveDraw
            .on('click', function () {
                const existing = $('#draw-' + n + '-window');

                if (existing.length) {
                    removeHide(existing);
                    return ;
                }
                const htmlContent = `
                    <div id="draw-${n}-window" class="window-agence-img-insta draggable">
                      <div class="xsmall-window2">
                        <div class="mochi-window-container">
                          <div class="color-bar secondary">
                            <div id="windowInstaImgTitle" class="system-text bigger">${n}.png</div>
                            <div class="ico-group">
                              <div class="ico-micro-croix"></div>
                            </div>
                          </div>
                          <div class="xsmall-inside-window-neutral-6">
                            <div class="img-insta-content" style="background-image: url('${data}')"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  `;
                $('#windowAgence4').append(htmlContent);

                const newWindow = $('#draw-' + n + '-window');

                newWindow.find('.color-bar').css('background-color', '#FF361C');
                newWindow.find('.img-insta-content').css('background-color', 'white');
                newWindow.find('.ico-micro-croix').on('click', function () {
                    newWindow.addClass('hide');
                });
                init_window(newWindow);
            })
            .on('mouseenter', function () {
                $(this).find('.app-text-hover').addClass('blue-highlight');
            }).on('mouseleave', function () {
                $(this).find('.app-text-hover').removeClass('blue-highlight');
            });
        dessinsContent.append(saveDraw);
    }

    // Flood fill
    function floodFill(x, y) {
        let imgData = mctx.getImageData(0, 0, main.width, main.height), target = getPixel(imgData, x, y),
            fillColor = hexToRgba(color);

        if (matchColor(target, fillColor))
            return;

        let stack = [[x, y]];

        while (stack.length) {
            let [px, py] = stack.pop();
            if (px < 0 || px >= main.width || py < 0 || py >= main.height) continue;
            let cur = getPixel(imgData, px, py);
            if (matchColor(cur, target)) {
                setPixel(imgData, px, py, fillColor);
                stack.push([px + 1, py], [px - 1, py], [px, py + 1], [px, py - 1]);
            }
        }
        mctx.putImageData(imgData, 0, 0);
    }

    function getPixel(d, x, y) {
        let i = (y * d.width + x) * 4;

        return [d.data[i], d.data[i + 1], d.data[i + 2], d.data[i + 3]];
    }

    function setPixel(d, x, y, c) {
        let i = (y * d.width + x) * 4;

        d.data[i] = c[0];
        d.data[i + 1] = c[1];
        d.data[i + 2] = c[2];
        d.data[i + 3] = c[3];
    }

    function matchColor(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
    }

    function hexToRgba(h) {
        let c = h.replace('#', '');

        if (c.length === 3)
            c = c.split('').map(ch => ch + ch).join('');

        let n = parseInt(c, 16);

        return [n >> 16 & 255, n >> 8 & 255, n & 255, 255];
    }

    function hexToRgbaString(hex, alpha) {
        const rgba = hexToRgba(hex);
        return `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${alpha})`;
    }

    // Événements souris & texte
    $(document).on('mouseup', function (e) {
        if (!main)
            return ;
        if (drawing) {
            let x = e.offsetX, y = e.offsetY;

            drawing = false;
            if (['line', 'rect', 'ellipse'].includes(currentTool)) {
                mctx.strokeStyle = color;
                mctx.lineWidth = 2;
                mctx.beginPath();
                if (currentTool === 'line') {
                    mctx.moveTo(startX, startY);
                    mctx.lineTo(x, y);
                    mctx.stroke();
                }
                else if (currentTool === 'rect') {
                    mctx.strokeRect(startX, startY, x - startX, y - startY);
                }
                else {
                    mctx.ellipse((startX + x) / 2, (startY + y) / 2, Math.abs(x - startX) / 2, Math.abs(y - startY) / 2, 0, 0, 2 * Math.PI);
                    mctx.stroke();
                }
                tctx.clearRect(0, 0, temp.width, temp.height);
                saveState();
            }
            else if (['pencil', 'brush', 'highlighter', 'eraser'].includes(currentTool)) {
                saveState();
            }
        }
    });

    function drawTextPreview() {
        tctx.clearRect(0, 0, temp.width, temp.height);
        tctx.fillStyle = color;
        tctx.font = fontSize + 'px sans-serif';
        tctx.textBaseline = 'top';
        tctx.fillText(previewText, startX, startY);
        if (caretVisible) {
            let w = tctx.measureText(previewText).width;

            tctx.fillRect(startX + w, startY, 2, fontSize);
        }
    }

    function disableTextMode() {
        textMode = false;
        clearInterval(caretInterval);
        $(document).off('keydown.textTool');
        tctx.clearRect(0, 0, temp.width, temp.height);
    }

    const savedDrawings = JSON.parse(localStorage.getItem('drawings') || '[]');
    savedDrawings.forEach((data, i) => {
        addSavedDrawing(data, i + 1);
    });
});