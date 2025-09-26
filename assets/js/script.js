const navMenu = document.getElementById('nav-menu')
const menuHamburguer = document.getElementById('menu-hamburguer')

menuHamburguer.addEventListener('click', () => {
    navMenu.classList.toggle('active')
})

