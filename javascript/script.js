const header=document.querySelector("nav");
const btnBurger=document.getElementById("burger-menu");
const  nav =document.querySelector(".navigation");
const linkNav=document.querySelectorAll(".navigation a");
const sections=document.querySelectorAll("section");
btnBurger.addEventListener("click",()=>{
    nav.classList.toggle("active");
    btnBurger.classList.toggle('bx-x')
})
linkNav.forEach(link=>{
    link.addEventListener("click",()=>{
        nav.classList.toggle("active");
        btnBurger.classList.remove('bx-x')  
    })
}
)

window.addEventListener("scrool",()=>{
    nav.classList.remove("active");
    btnBurger.classList("bx-x")
})

window.addEventListener("scroll, ("=>{
    header.classList.toggle("active")
})