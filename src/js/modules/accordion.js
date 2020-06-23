const accordion = (triggerHeaders, accordionBlocks) => { 
    const accordionHeading = document.querySelectorAll(triggerHeaders)
    const allBlocks = document.querySelectorAll(accordionBlocks)
    
    

    function hideAllBlocks(blocks) {
        blocks.forEach(block => {
            block.classList.add('animated', 'fadeOutUp')
            // block.classList.remove('fadeInUp')
            block.style.display = 'none'
        })
    }

    accordionHeading.forEach((head, i) => {
        

        head.addEventListener('click', () => {
            hideAllBlocks(allBlocks)

            accordionHeading.forEach(item => {
                item.classList.remove('active-style')
            })

            head.classList.add('active-style')
            allBlocks[i].classList.remove('fadeOutUp')
            allBlocks[i].classList.add('animated', 'fadeInUp')
            allBlocks[i].style.display = 'block'
        })
    })
    
    
    
    hideAllBlocks(allBlocks)
}

export default accordion