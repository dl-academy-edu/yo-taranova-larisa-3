let sendMessageModal = document.querySelector('.form_flex_SM')

let sendMessageBackground = document.querySelector('.body')

let sendMessageButtonClose = document.querySelector('.form_close_SM')

let sendMessageLink = document.querySelector('.footer_SM_button')

sendMessageLink.addEventListener('click', function() {
    sendMessageModal.classList.add('form_flex_SM_active')
})

sendMessageLink.addEventListener('click', function() {
    sendMessageBackground.classList.add('body_active')
})

sendMessageButtonClose.addEventListener('click', function() {
    sendMessageBackground.classList.toggle('body_active')
})

sendMessageButtonClose.addEventListener('click', function() {
    sendMessageModal.classList.toggle('form_flex_SM_active')
})