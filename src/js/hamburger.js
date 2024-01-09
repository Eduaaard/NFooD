

let hamburger = document.querySelector('.header-top_hamburger'),
    menuList = document.querySelector('.header-top__menu'),
    btnsList = document.querySelector('.header-top__btns'),
    body = document.querySelector(".active"),
    firstText = document.querySelectorAll('#menu');

hamburger.addEventListener("click", function () {
    menuList.classList.toggle("header-top__menu-active")
    btnsList.classList.toggle("header-top__btns-active")
    hamburger.style.cssText = 'z-index: 5;'

    firstText.forEach((item) => {
        item.style.cssText = 'color: white;'
    })
    
})