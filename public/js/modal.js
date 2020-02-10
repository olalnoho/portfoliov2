const btn = document.querySelector('.project__button')
const modal = document.querySelector('.modal')
const backdrop = document.querySelector('.backdrop')

backdrop.addEventListener('click', function (e) {
   modal.style.display = 'none'
   this.style.display = 'none'
})
btn.addEventListener('click', function (e) {
   modal.style.display = 'block'
   backdrop.style.display = 'block'
})