// ===============ANIMATIONS=======================
document.addEventListener("DOMContentLoaded", function () {
  
    const elements = document.querySelectorAll('.animate-on-scroll');
      const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animationType = entry.target.getAttribute('data-animate');
          
          entry.target.classList.add(animationType);
  
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
  
    elements.forEach(el => observer.observe(el));
  });


/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click',linkAction))

/*==================== VALUES TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('values__active')
        })
        target.classList.add('values__active')

        tabs.forEach(tab => {
            tab.classList.remove('values__active')
        })
        tab.classList.add('values__active')
    })
})

/*==================== PRODUCTS SWIPER  ====================*/

let swiperProducts = new Swiper('.products__container', {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
})

/*==================== SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('#home, #about, #distributors, #contact, #products')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);

/*==================== Email logic ====================*/ 
document.getElementById('contact_button').addEventListener('click', function(event) {
    event.preventDefault();

    document.getElementById('contact_form').dispatchEvent(new Event('submit'));
});

document.getElementById('contact_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('contact-form-name').value.trim();
    const email = document.getElementById('contact-form-email').value.trim();
    const subject = document.getElementById('contact-form-subject').value.trim();
    const message = document.getElementById('contact-form-message').value.trim();

    if (name === '' || email === '' || subject === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    const templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
    };


    console.log('Form is valid. Proceed with the logic.');
    emailjs.sendForm('service_dyh3aq6', 'template_rvpf5vk', document.getElementById('contact_form'))
                    .then(() => {
                        console.log('SUCCESS!');
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
});