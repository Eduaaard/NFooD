
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
            itemPhoto.src = './img/5-Reviews/avatars/1.png'
        }
        if (currentSlide == 2) {
            itemText.textContent = 'Кафе NfooD оставило приятное впечатление своим уютом и обслуживанием. Интерьер создает атмосферу умиротворения, что делает это место отличным выбором для спокойного вечера. Меню впечатляет разнообразием блюд, от классических до экзотических. Вкусная еда и дружелюбный персонал добавляют удовольствия в посещение.'
            itemPhoto.src = './img/5-Reviews/avatars/2.png'
        }
        if (currentSlide == 3) {
            itemText.textContent = 'Кафе NfooD порадовало своей атмосферой современности и стильным дизайном. Обслуживание на высшем уровне – персонал приветливый и готов предложить рекомендации по меню. Однако, я обратил внимание на несколько недочетов в скорости подачи блюд. Несмотря на это, кухня заслуживает похвалы за высокое качество приготовленных блюд.'
            itemPhoto.src = './img/5-Reviews/avatars/3.png'
        }
        
    }

    
})