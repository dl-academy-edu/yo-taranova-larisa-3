let registerModal = document.querySelector('.form_flex_RR')

let registerBackground = document.querySelector('.body')

let registerModalButton = document.querySelector('.form_button_RR')

let registerModalButtonClose = document.querySelector('.form_close')

let registerHeaderLink = document.querySelector('.register_button')



registerHeaderLink.addEventListener('click', function() {
    registerModal.classList.add('form_flex_RR_active')
})

registerHeaderLink.addEventListener('click', function() {
    registerBackground.classList.add('body_active')
})

registerHeaderLink.addEventListener('', function() {
    registerBackground.classList.add('body_active')
})

registerModalButtonClose.addEventListener('click', function() {
    registerBackground.classList.toggle('body_active')
})

registerModalButtonClose.addEventListener('click', function() {
    registerModal.classList.toggle('form_flex_RR_active')
})


let signInModal = document.querySelector('.form_flex_SI')

let signInModalButton = document.querySelector('.form_button_SI')

let signInModalButtonClose = document.querySelector('.form_close')

let signInHeaderLink = document.querySelector('.register_button')



registerHeaderLink.addEventListener('click', function() {
    registerModal.classList.add('form_flex_RR_active')
})

registerHeaderLink.addEventListener('click', function() {
    registerBackground.classList.add('body_active')
})

registerHeaderLink.addEventListener('', function() {
    registerBackground.classList.add('body_active')
})

registerModalButtonClose.addEventListener('click', function() {
    registerBackground.classList.toggle('body_active')
})

registerModalButtonClose.addEventListener('click', function() {
    registerModal.classList.toggle('form_flex_RR_active')
})