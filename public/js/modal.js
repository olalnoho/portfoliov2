const btn = document.querySelectorAll('.project__button')
const modal = document.querySelector('.modal')
const backdrop = document.querySelector('.backdrop')
const infoBox = document.querySelector('.modal__info')
const carousel = document.querySelector('.modal__carousel')
const mClose = document.querySelector('.modal__close')

const toggleModal = e => {
   modal.classList.toggle('closed')
   backdrop.classList.toggle('closed')
};

[backdrop, mClose].forEach(el => el.addEventListener('click', function (e) {
   if (e.target == this) toggleModal(e)
}))

Array.from(btn).forEach((el, i) => el.addEventListener('click', function (e) {
   toggleModal()
   populateModal(i)
}))

const makeBtn = (text, href) => {
   const btn = document.createElement('a')
   btn.classList.add('btn')
   btn.classList.add('btn--primary')
   btn.href = href
   btn.innerText = text
   return btn
}

function fillInfo(key, title, detail) {
   const btnGroup = document.querySelector('.modal .button-group')
   btnGroup.innerHTML = ''
   const project = modalData[key]
   title.innerHTML = project.title
   detail.innerHTML = project.detail
   if (project.link) {
      btnGroup.appendChild(makeBtn('Live Demo', project.link))
   }
   btnGroup.appendChild(makeBtn('Source Code', project.source))
}

function populateModal(i) {
   const title = document.querySelector('.modal__info__title')
   const detail = document.querySelector('.modal__info__detail')
   fillInfo(Object.keys(modalData)[i], title, detail)
   changeImage(0)
}

const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const modalImage = document.getElementById('modalImage')

let imageNum = 0
function changeImage(i) {
   modalImage.src = `./images/sms/${i}.png`
}

nextBtn.addEventListener('click', function(e){
   imageNum++
   if(imageNum > 2) {
      imageNum = 0
   }
   changeImage(imageNum)
})

prevBtn.addEventListener('click', function(e){
   imageNum--
   if(imageNum < 0) {
      imageNum = 2
   }
   changeImage(imageNum)
})