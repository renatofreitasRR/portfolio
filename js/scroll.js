const players = Array.from(
    document.querySelectorAll('.js-scroll-anime')
    )

const windowBottom = () => {
    window.scrollY + window.innerHeight
}

const elementBottom = (elemento) => {
    elemento.getBoundingClientRect().bottom + window.scrollY
}

const onScreen = (elemento) => {
    windowBottom() > elementBottom(elemento)
}



