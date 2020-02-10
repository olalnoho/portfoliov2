const btn = document.querySelectorAll('.project__button')
const modal = document.querySelector('.modal')
const backdrop = document.querySelector('.backdrop')

backdrop.addEventListener('click', function (e) {
   modal.classList.toggle('closed')
   this.classList.toggle('closed')
})

Array.from(btn).forEach(el => el.addEventListener('click', function (e) {
   modal.classList.toggle('closed')
   backdrop.classList.toggle('closed')
}))