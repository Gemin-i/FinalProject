let burger = document.querySelector('.burger')
let header2 = document.querySelector('.header2')
let cross = document.querySelector('.cross')
let body = document.querySelector('.body')

burger.addEventListener('click', () => {
    header2.style.display = 'block'
    burger.style.display = 'none'
    cross.style.display = 'block' 
    body.style.height = '100vh'
    body.style.overflow = 'hidden'
})

cross.addEventListener('click', () => {
    header2.style.display = 'none'
    burger.style.display = 'block'
    cross.style.display = 'none' 
    body.style.height = '100%'
    body.style.overflow = 'visible'
})