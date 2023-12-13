window.addEventListener("DOMContentLoaded", function () {
    // add variables

    let arrows = this.document.querySelectorAll(".arrow"),
        itemPhoto = this.document.querySelector(".reviews__blob-people"),
        itemText = this.document.querySelector(".reviews__content-text")

    let params = {
        slideCount: 3,
        startSlide: 1,
        currentSlide: 1
    }

    arrows.forEach((item) => {
        item.addEventListener("click", function () {
            item == arrows[1] ? setCurrentSlide("right") : setCurrentSlide("left");
            console.log(params.currentSlide)
        })
    })


    function setCurrentSlide(arrow) {
        if (arrow == 'right') {
            params.currentSlide >= params.slideCount ? params.currentSlide = 1 : ++params.currentSlide;
        } else {
            params.currentSlide <= 1 ? params.currentSlide = params.slideCount : --params.currentSlide;
        }
        
        slideChanger(params.currentSlide)
    }

    function slideChanger(currentSlide) {
        if (currentSlide == 1) {
            itemText.textContent = 'Посещение ресторана NFooD превзошло все мои ожидания! Отсамого момента входа меня поразила атмосфера – уютное и стильное пространство, которое сразу же создает ощущение особенного вечера. Обслуживание на высшем уровне, персонал профессиональный и внимательный.'
            itemPhoto.src = '/src/img/5-Reviews/avatars/1.png'
        }
        if (currentSlide == 2) {
            itemText.textContent = 'fejfwejwfefwebfewjjfbewbjhnfe'
            itemPhoto.src = '/src/img/3-About_us/women.png'
        }
        if (currentSlide == 3) {
            itemText.textContent = 'fejfwejwfefwebfewjjfbewbjhnfe'
            itemPhoto.src = '/src/img/3-About_us/blob2.svg'
        }
        
    }

    
})