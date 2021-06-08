const menu = document.getElementById('menu')
const exit = document.getElementById('menu-exit')
const hiddenMenu = document.getElementById('hidden')

menu.addEventListener('click', (event) => {
  event.preventDefault()
  openNav()
})

exit.addEventListener('click', (event) => {
  event.preventDefault()
  closeNav()
})

function openNav() {
  hiddenMenu.style.height = '100%'
}

function closeNav() {
  hiddenMenu.style.height = '0%'
}
