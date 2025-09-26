const navMenu = document.getElementById('nav-menu')
const menuHamburguer = document.getElementById('menu-hamburguer')


function toggleMenu() {
    navMenu.classList.toggle('active')
}

menuHamburguer.addEventListener('click', toggleMenu)

document.addEventListener('click', (event) => {
    const isMenuOpen = navMenu.classList.contains('active')
    
    if (isMenuOpen && !navMenu.contains(event.target) && !menuHamburguer.contains(event.target)) {
        navMenu.classList.remove('active')
    }
})

