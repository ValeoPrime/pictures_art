

const modals = (state = {}) => {
    let btnPress = false

    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector)
        const modal = document.querySelector(modalSelector)
        const close = document.querySelector(closeSelector)
        const allModals = document.querySelectorAll('[data-modal]')
        const scrollWidth = calcScroll()

        trigger.forEach(item => {
            item.addEventListener('click', (event) => {
                if (event.target) {
                    event.preventDefault()
                }

                if (destroy) {
                    item.remove()
                }

                btnPress = true
                


                allModals.forEach(item => {
                    item.style.display = 'none'
                    item.classList.add('animated', 'fadeIn')
                })

                modal.style.display = 'block'
                document.body.style.overflow = 'hidden'
                document.body.style.marginRight = `${scrollWidth}px`

            })
        })

        close.addEventListener('click', () => {
            allModals.forEach(item => {
                item.style.display = 'none'
            })

            modal.style.display = 'none'
            document.body.style.overflow = ''
            document.body.style.marginRight = '0'
        })

        modal.addEventListener('click', (event) => { //закрытие модалки при клике на подложку

            if (event.target === modal) {
                allModals.forEach(item => {
                    item.style.display = 'none'
                })

                modal.style.display = 'none'
                document.body.style.overflow = ''
                document.body.style.marginRight = "0"
            }
        })
    }

    function showPopUpByTime(selector, time) {

        setTimeout(() => {
            let display

            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = true
                }
            })

            if (!display) {
                document.querySelector(selector).style.display = 'block'
                document.body.style.overflow = 'hidden'
                document.body.style.marginRight = `15px`
            }

        }, time)

    }

    function calcScroll() {
        let div = document.createElement('div')

        div.style.width = '50px'
        div.style.height = '50px'
        div.style.overflowY = 'scroll'
        div.style.visibility = 'hidden'

        document.body.appendChild(div)

        let scrollWidth = div.offsetWidth - div.clientWidth
        div.remove()

        return scrollWidth
    }

    function openModalByScroll(selector) {
        window.addEventListener('scroll', () => {
            
            if (!btnPress && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)) { // сколько пролистал + сколько видие у себя на экране больше либо равно всему скролу всей страницы
                document.querySelector(selector).click()//Програмный клик по елементу
            }
        })


    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close')
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close')
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true)
    openModalByScroll('.fixed-gift')
    // showPopUpByTime('.popup-consultation', 60000)
}

export default modals
