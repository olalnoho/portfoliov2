const btn = document.querySelector('.project__button')
const modal = document.querySelector('.modal')
const backdrop = document.querySelector('.backdrop')

backdrop.addEventListener('click', function (e) {
   modal.classList.toggle('closed')
   this.classList.toggle('closed')
})
btn.addEventListener('click', function (e) {
   modal.classList.toggle('closed')
   backdrop.classList.toggle('closed')
})