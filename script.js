document.addEventListener('DOMContentLoaded', function () {
    

    let navlink = document.querySelectorAll(".nav-link");
    let currentUrl = window.location.pathname;
    console.log("current url: ", currentUrl)
    navlink.forEach(link => {
        let linkPath = link.getAttribute("href");
        console.log("link path: ", linkPath)
        if(currentUrl === linkPath){
            link.classList.add("active");
        }
        else{
            link.classList.remove("active")
        }
    })

    //mobile nav-bar
    let menu = document.querySelector('.menu-icon');
    let navLinks = document.querySelector('.menu');
    menu.addEventListener('click', function () {
        menu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    //herosection slide
    let slides = document.querySelectorAll(".slide");
    let bullets = document.querySelectorAll(".sqr");
    let index = 0;
    function Slide(){
        let prevIndex = index;
        index = (index + 1) % slides.length;
        slides[prevIndex].classList.remove("active");
        slides[prevIndex].style.transform = "translateX(-100%)";
        slides[index].classList.add("active");
        slides[index].style.transform = "translateX(0)";
        setTimeout(() => {
            slides[prevIndex].style.transition = "none";
            slides[prevIndex].style.transform = "translateX(100%)";
            setTimeout(() => {
                slides[prevIndex].style.transition = "transform 1s cubic-bezier(0.25, 1, 0.5, 1)";    
            }, 50);
        }, 1000);
        bullets.forEach(bullet => {
            bullet.classList.remove("active");
        });
        bullets[index].classList.add("active");
    }
    slides.forEach((slide, i) => {
        if(i !== index){
            slide.style.transform = "translateX(100%)";
        }
    });
    setInterval(Slide, 5000);

    //scroll-button
    let scrollBtnDown = document.querySelector(".down");
    let scrollBtnUp = document.querySelector(".top")
    window.addEventListener("scroll", function () {
        scrollBtnDown.addEventListener("click", function(){
            window.scrollTo({ 
                top: document.body.scrollHeight, 
                behavior: "smooth" 
            });
        })
        scrollBtnUp.addEventListener("click", function(){
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        })
    })
})