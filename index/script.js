const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
alert ("Ayajonim va Ukajonimni yaxshi ko'raman")
open.addEventListener('click', () => container.classList.add('show-nav'))
close.addEventListener('click', () => container.classList.remove('show-nav'))
