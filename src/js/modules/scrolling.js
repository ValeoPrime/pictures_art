const scrolling = (upSelector) => {

    const selector = document.querySelector(upSelector)
    

    window.addEventListener('scroll', () => {
        if(document.documentElement.scrollTop > 1650){
            selector.style.opacity = 1
        } else { 
            selector.style.opacity = 0
        }
        console.log(document.documentElement.scrollTop);
       
    })

    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };

} 
export default scrolling