const filter = () => {
    const menu = document.querySelector('.portfolio-menu')
    const items = menu.querySelectorAll('li')
    const btnAll = menu.querySelector('.all')
    const btnLovers = menu.querySelector('.lovers')
    const btnChef = menu.querySelector('.chef')
    const btnGirl = menu.querySelector('.girl')
    const btnGuy = menu.querySelector('.guy')
    const btnGrandmother = menu.querySelector('.grandmother')
    const btnGranddad = menu.querySelector('.granddad')
    const wrapper = document.querySelector('.portfolio-wrapper')
    const markAll = wrapper.querySelectorAll('.all')
    const markGirl = wrapper.querySelectorAll('.girl')
    const markLowers = wrapper.querySelectorAll('.lowers')
    const markChef = wrapper.querySelectorAll('.chef')
    const markGuy = wrapper.querySelectorAll('.guy')
    const no = document.querySelector('.portfolio-no')

    const typeFilter = (markType) => {
        markAll.forEach(item => {
            item.style.display = 'none'
            item.classList.remove('animated', 'fadeIn')

            no.style.display = 'none'
            no.classList.remove('animated', 'fadeIn')

            if(markType){
               markType.forEach(i => {
                    i.style.display = 'block'
                    i.classList.add('animated', 'fadeIn')
               }) 
            } else {
                no.style.display = 'block'
                no.classList.add('animated', 'fadeIn')
            }

            
        })
    }

    btnAll.addEventListener('click', () => {
        typeFilter(markAll)
    })

    btnLovers.addEventListener('click', () => {
        typeFilter(markLowers)
    })

    btnChef.addEventListener('click', () => {
        typeFilter(markChef)
    })

    btnGuy.addEventListener('click', () => {
        typeFilter(markGuy)
    })

    btnGirl.addEventListener('click', () => {
        typeFilter(markGirl)
    })

    btnGrandmother.addEventListener('click', () => {
        typeFilter()
    })

    btnGranddad.addEventListener('click', () => {
        typeFilter()
    })


    menu.addEventListener('click', (e) => {
        
        if(e.target && e.target.tagName == "LI" ){
            items.forEach(item => {
                item.classList.remove('active')
                e.target.classList.add('active')
            })
        }
    })
}

export default filter