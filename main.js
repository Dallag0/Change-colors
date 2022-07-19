const color = document.querySelector('div')
const body = document.querySelector('body')
const title = document.querySelector('.title')
const credits = document.querySelector('.credits')

color.addEventListener('click', () => {
  color.classList.toggle('changeColor')
  color.classList.toggle('div')
  title.classList.toggle('title2')
  credits.classList.toggle('credits2')
  body.classList.toggle('body')
})

