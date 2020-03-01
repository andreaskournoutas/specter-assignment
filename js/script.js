functionsHandler();
window.addEventListener('resize', functionsHandler);

function functionsHandler() { 
    var imgs = document.images, len = imgs.length, counter = 0;
    [].forEach.call( imgs, function( img ) {
        if( img.complete)
            incrementCounter();
        else
            img.addEventListener( 'load', incrementCounter, false );
    });
    function incrementCounter() {
        counter++;
        if ( counter === len ) {
            if (document.body.clientWidth >= 768) {
                initializeHeight('services__item-title');
                initializeHeight('services__item-text');
                initializeHeight('news__item-title');
                initializeHeight('news__item-image');
                equalizeHeightToMax('services__item-title');
                equalizeHeightToMax('services__item-text');
                equalizeHeightToMax('news__item-title');
            }
            else {
                initializeHeight('services__item-title');
                initializeHeight('services__item-text');
                initializeHeight('news__item-title');
                initializeHeight('news__item-image');
                equalizeHeightToMin('news__item-image');
            }
        }
    }
}
function equalizeHeightToMax(className) {
    let items = document.getElementsByClassName(className), itemsList = [...items], maxHeight = 0;
    itemsList.forEach(function(item) {
        itemHeight = item.offsetHeight;
        if (itemHeight > maxHeight) {
            maxHeight = itemHeight;
        }
    });
    itemsList.forEach(function(item) {
        item.style.height = maxHeight + 'px';
    });
}
function equalizeHeightToMin(className) {
    let items = document.getElementsByClassName(className), itemsList = [...items], minHeight = 1000;
    itemsList.forEach(function(item) {
        itemHeight = item.offsetHeight;
        if (itemHeight < minHeight) {
            minHeight = itemHeight;
        }
    });
    itemsList.forEach(function(item) {
        item.style.height = minHeight + 'px';
    });
}
function initializeHeight(className) {
    let items = document.getElementsByClassName(className), itemsList = [...items];
    itemsList.forEach(function(item) {
        item.style.height = 'auto';
    });
}