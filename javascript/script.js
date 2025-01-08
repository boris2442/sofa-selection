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

window.addEventListener("scroll", ()=>{
    header.classList.toggle("active",window.scrollY>0 )
})

const scrollActive=()=>{
    sections.forEach(section=>{
        let top=window.scrollY;
        let offset=section.offsetTop-150;
        let height=section.offsetHeight;
        let id=section.getAttribute("id");
        if(top>=offset &&top<offset+height){
            linkNav.forEach(links=>{
                links.classList.remove("active")
                document.querySelector(`.navigation a[href=${id}]`).classList.add("active")
            })
        }
    })
}

window.addEventListener("scroll",scrollActive)
// ##################partie scroll reveal
const sr=ScrollReveal({
    duration:1500,
    origin:"top",
    distance:"30px",
    reset:true
})
sr.reveal(".about, .footer-section, .newsletter, .brands, .news, .shop, .home, .copy")


// partie destinée au swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:{
        disableOnInteraction: false, 
    },
  speed:500,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


//   partie const typewriter

const title=document.querySelector("h1");
const typewriter=new Typewriter(title, {
    loop:true,
    delay:100
})

typewriter
.typeString(`  <span class="text-span1" > L'Art du Confort:<br/></span> 
          Canapés et Chaises d'exception`)
          .pauseFor(2000)
          .deleteAll()
          .pauseFor(2000)
.start();