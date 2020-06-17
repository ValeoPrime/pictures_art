const loadStyles = (trigger, styles) => {
    const hiddenCards = document.querySelectorAll(styles)
    const button = document.querySelector(trigger)

    button.addEventListener('click', () => {
        hiddenCards.forEach(item => {
            item.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs")
            item.classList.add("animated", "fadeInUp", "col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1")


        })

        button.style.display = 'none'
    })
}

export default loadStyles