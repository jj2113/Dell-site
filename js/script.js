window.onload = function () {
    /* cont01 */
    let cont = document.getElementsByClassName('new')[0];
    let contImg = cont.getElementsByTagName('img')[0];
    let contMenu = cont.getElementsByTagName('li');

    let i = 0;
    for (i; i < contMenu.length; i++) {
        let num = i + 1;
        let imgChange = 'img/section' + num + '.png';
        contMenu[i].onmouseenter = function () {
            contImg.src = imgChange;
        }
    }

    /* recommend */
    let recommend = document.getElementsByClassName('recommend')[0];
    let menuBtn = recommend.querySelectorAll('.menu li');
    let list = recommend.querySelectorAll('.list');
    for (let i = 0; i < menuBtn.length; i++) {
        menuBtn[i].onclick = function () {
            menuBtn.forEach(function (item) {
                item.classList.remove('on');
            })
            list.forEach(function (item) {
                item.classList.remove('on')
            })
            menuBtn[i].classList.add('on');
            list[i].classList.add('on');
        }
    }
}
