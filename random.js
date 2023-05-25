window.addEventListener('DOMContentLoaded', function () {
    var gifs = document.getElementsByClassName('gif');
    var container = document.getElementsByClassName('allgifscontainer')[0];

    for (var i = 0; i < gifs.length; i++) {
        var leftPos = Math.random() * (container.offsetWidth - gifs[i].offsetWidth);
        var topPos = Math.random() * (container.offsetHeight - gifs[i].offsetHeight);

        gifs[i].style.left = leftPos + 'px';
        gifs[i].style.top = topPos + 'px';
    }
});