let burger = document.querySelector(".burger")
let nav = document.querySelector(".nav")
let navLinks = document.querySelectorAll(".nav__link") 


burger.addEventListener("click", () => {
    burger.classList.toggle("burger_active")
    nav.classList.toggle("nav_active")
    
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        burger.classList.toggle("burger_active")
        nav.classList.toggle("nav_active")

    })
})
