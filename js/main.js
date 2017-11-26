
// on click //

var me = document.getElementById('me');
var mick = document.getElementById('mick');
var us = document.getElementById('us');

me.addEventListener('click', picLink);
mick.addEventListener('click', picLink);
us.addEventListener('click', picLink);

function picLink() {
    var allImages = document.querySelectorAll('img');

    for (var i = 0; i < allImages.length; i++) {
        allImages[i].className = 'hide';
    }

    var picId = this.attributes['data-img'].value;
    var pic = document.getElementById(picId);
    if (pic.className === 'hide') {
        pic.className = '';
    } else {
        pic.className = 'hide';
    }
}
