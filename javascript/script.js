const header=document.querySelector("nav");
const btnBurger=document.getElementById("burger-menu");
const  nav =document.querySelector(".navigation");
const linkNav=document.querySelectorAll(".navigation a");
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