
$(document).ready(function(){
    $('.reviews-slides').slick({
        autoplay: true,
        arrows: true
    });

    const nav = document.querySelector('nav');
    const heroSection = document.querySelector('#home');
    const heroObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if(!e.isIntersecting){
                nav.classList.add('scrolled'); 
            }else{
                nav.classList.remove('scrolled'); 
            }
        })
    }, {
        threshold: 0.7
    })

    heroObserver.observe(heroSection);

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            navLinks.forEach(l => {
                l.classList.remove('active');
            });
            e.target.classList.add('active');
        })
    })
});