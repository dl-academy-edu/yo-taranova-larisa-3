let registerModal = document.querySelector('.form_flex_RR')

let registerBackground = document.querySelector('.body')

let registerModalButtonClose = document.querySelector('.form_close_RR')

let registerHeaderLink = document.querySelector('.register_button')



registerHeaderLink.addEventListener('click', function() {
    registerModal.classList.add('form_flex_RR_active')
})

registerHeaderLink.addEventListener('click', function() {
    registerBackground.classList.add('body_active')
})

registerModalButtonClose.addEventListener('click', function() {
    registerBackground.classList.toggle('body_active')
})

registerModalButtonClose.addEventListener('click', function() {
    registerModal.classList.toggle('form_flex_RR_active')
})


let signInModal = document.querySelector('.form_flex_SI')

let signInBackground = document.querySelector('.body')

let signInModalButtonClose = document.querySelector('.form_close')

let signInHeaderLink = document.querySelector('.sign_in_button')



signInHeaderLink.addEventListener('click', function() {
    signInModal.classList.add('form_flex_SI_active')
})

signInHeaderLink.addEventListener('click', function() {
    signInBackground.classList.add('body_active')
})

signInModalButtonClose.addEventListener('click', function() {
    registerBackground.classList.toggle('body_active')
})

signInModalButtonClose.addEventListener('click', function() {
    signInModal.classList.toggle('form_flex_SI_active')
})