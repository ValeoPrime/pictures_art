import modals from './modules/modal'
import sliders from './modules/sliders'
import forms from './modules/forms'
import mask from './modules/mask'
import checkTextInputs from './modules/checkTextInputs'
import loadStyles from './modules/loadStyles'
import calc from './modules/calc'

window.addEventListener('DOMContentLoaded', () => { 
    'use strict'

    
    modals()
    sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn')
    sliders('.main-slider-item', 'vertical')
    forms()
    checkTextInputs('[name="name"]')
    checkTextInputs('[name="message"]')
    loadStyles('.button-styles', '.styles-2')
    calc('#size', '#material', '#options', '.promocode', '.calc-price')
})