const sliders = (slides, direction, prev, next) => {
    let slideIndex = 1
    let paused = false
    const items = document.querySelectorAll(slides)
    

    function showSlides(n){
        if(n > items.length) {
            slideIndex = 1
        }
        if(n < 1){
            slideIndex = items.length
        }

        items.forEach(item => {
            item.classList.add('animated')
            item.style.display = 'none'
        })
        
        items[slideIndex - 1].style.display = 'block'
    }

    

    showSlides(slideIndex)

    function changeSlides(n){
        showSlides(slideIndex += n)
    }

    try {
        const prevBtn = document.querySelector(prev)
        const nextBtn = document.querySelector(next)

        prevBtn.addEventListener('click', () => {
            changeSlides(-1)
            items[slideIndex - 1].classList.remove('slideInLeft')
            items[slideIndex - 1].classList.add('slideInRight')
        })
        
        nextBtn.addEventListener('click', () => {
            changeSlides(1)
            items[slideIndex - 1].classList.remove('slideInRight')
            items[slideIndex - 1].classList.add('slideInLeft')
        })


    } catch(e){}

    function activateAnimation () {
        if(direction === 'vertical'){
            paused = setInterval(() => {
                changeSlides(1)
                items[slideIndex - 1].classList.add('slideInDown')
            }, 3000);
        } else {
            paused = setInterval(() => {
                changeSlides(1)
                items[slideIndex - 1].classList.remove('slideInRight')
                items[slideIndex - 1].classList.add('slideInLeft')
            }, 3000);
        }
    }

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused) //убрать интервал при наведении мыши на блок слайдера
    })
    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation() // поставить интервал снова после ухода мыши с блока
    })
}

export default sliders 