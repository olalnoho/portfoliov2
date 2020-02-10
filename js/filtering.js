const map = {
   0: '',
   1: 'react',
   2: 'graphql',
   3: 'cmd',
}


const projects = Array.from(document.querySelectorAll('.project'))

const filterBtns = Array.from(
   document.querySelectorAll('.filter')
)

let prevActive = filterBtns[0]

filterBtns.forEach((el, i) => {
   el.addEventListener('click', function (e) {
      if (prevActive) prevActive.classList.toggle('active')
      this.classList.toggle('active')
      prevActive = this
      if (i == 0) {
         return showAll()
      }
      filterResults(map[i])
   })
})

function filterResults(q) {
   showAll()
   projects.forEach(el => {
      if(!el.hasAttribute(q)) el.style.display = 'none'
   })
}

function showAll() {
   projects.forEach(p => p.style.display = 'flex')
}