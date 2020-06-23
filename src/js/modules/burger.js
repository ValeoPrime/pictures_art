const burger = (burger, burgerMen) => {
    
    const burgerBtn = document.querySelector(burger)
    const burgerMenu = document.querySelector(burgerMen)


    burgerMenu.style.display = 'none'
    
    burgerBtn.addEventListener('click', () => {
        if( burgerMenu.style.display == 'none' && window.screen.availWidth < 993){
            burgerMenu.style.display = 'block'
        } else {
            burgerMenu.style.display = 'none'
        }
        
    }) 
    

    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) {
            burgerMenu.style.display = 'none'
        }
    })
}

export default burger