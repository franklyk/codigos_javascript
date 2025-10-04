const btnMenu = document.querySelector('#btn-menu');
const sidebar = document.querySelector('#sidebar');
const menuMobile = document.querySelector('#menu-mobile');


if (btnMenu) {
    btnMenu.addEventListener('click', function () {
        btnMenu.classList.toggle('active');
        if (menuMobile) {
            menuMobile.classList.toggle('open');
        }

    });
}
