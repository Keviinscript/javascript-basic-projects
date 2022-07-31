// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


const mobalBtn = document.querySelector('.modal-btn')
const mobalOverlay = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn')

mobalBtn.addEventListener('click', function(){
    mobalOverlay.classList.add('open-modal')
})

closeBtn.addEventListener('click', function(){
    mobalOverlay.classList.remove('open-modal')
})
