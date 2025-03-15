




/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey

    emailjs.sendForm('service_onx6hzg' , 'template_qqc0k64' , '#contact-form' , 'diYYRSMiuzrTQjM0F')

    .then(() => {
        //show sent message
        contactMessage.textContent = ' Message sent successfully ✅';

        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    },() =>{
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}
contactForm.addEventListener('submit' , sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav-list a[href*=' + sectionId + ']')


        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }     
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/

// import ScrollReveal from 'scrollreveal';


const sr = ScrollReveal({
    origin:'top',
    // distance: ' 60px',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,
})

sr.reveal(`.perfil, .contact-form`)
sr.reveal(`.info` , {origin:'left', delay: 800})
sr.reveal(`.skills` , {origin:'left', delay: 1000})
sr.reveal(`.about` , {origin:'right', delay: 1200})
sr.reveal(`.projects-card , .services-card, .experience-card` , {interval: 100})



// console.log(document.querySelector('.skills'));

