let editingPasswordModal = document.querySelector('.form_flex_EW')

let editingPasswordBackground = document.querySelector('.body')

let editingPasswordModalButtonClose = document.querySelector('.form_close_EW')

let editingPasswordLink = document.querySelector('.MP_button_list__element-A')

editingPasswordLink.addEventListener('click', function() {
    editingPasswordModal.classList.add('form_flex_EW_active')
})

editingPasswordLink.addEventListener('click', function() {
    editingPasswordBackground.classList.add('body_active')
})

editingPasswordModalButtonClose.addEventListener('click', function() {
    editingPasswordBackground.classList.toggle('body_active')
})

editingPasswordModalButtonClose.addEventListener('click', function() {
    editingPasswordModal.classList.toggle('form_flex_EW_active')
})

let editingDataModal = document.querySelector('.form_flex_EDA')

let editingDataBackground = document.querySelector('.body')

let editingDataModalButtonClose = document.querySelector('.form_close_EDA')

let editingDataLink = document.querySelector('.MP_button_list__element-B')

editingDataLink.addEventListener('click', function() {
    editingDataModal.classList.add('form_flex_EDA_active')
})

editingDataLink.addEventListener('click', function() {
    editingDataBackground.classList.add('body_active')
})

editingDataModalButtonClose.addEventListener('click', function() {
    editingDataBackground.classList.toggle('body_active')
})

editingDataModalButtonClose.addEventListener('click', function() {
    editingDataModal.classList.toggle('form_flex_EDA_active')
})