$(function () {
    $(".open-menu-btn").on('click', function(){
        $('.popup-menu').addClass('popup-menu--active');
    });
    $('.popup-menu__close-btn').on('click', function(){
        $('.popup-menu').removeClass('popup-menu--active');
    })
})