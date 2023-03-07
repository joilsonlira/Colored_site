const SingUp = document.querySelector('.loggin').children[1]
const Close = document.querySelector('.modal_form').children[4]
const Modal = document.getElementById('modal')

SingUp.addEventListener('click', ()=>{

    Modal.style.display = 'flex'

})

Close.addEventListener('click', ()=>{

    Modal.style.display = 'none'

})