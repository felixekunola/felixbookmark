const accordionItemHeaders = document.querySelectorAll(".accordion-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");
    })
})

const navSlide = ()=> {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-mobile')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })
}

navSlide();

let tabs = document.querySelectorAll('.tabs-toggle'), 
    contents = document.querySelectorAll('.tabs-content');

tabs.forEach((tab, index) =>{
    tab.addEventListener('click', () => {
        contents.forEach ((content) => {
            content.classList.remove('is-active');
        });
        tabs.forEach((tab) => {
            tab.classList.remove('is-active');
        });

        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
    });
        
});

const email = document.querySelector('.email');
const icon = document.querySelector('.icon-error');
const error = document.querySelector('.error');
const btn = document.querySelector('.submit');
let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
function check(){
    if(email.value.match(regExp)){
        error.style.display = "none";

    }
    else {
        email.style.borderColor = "#e74c3c";
        error.style.display = "block";
    }
    if(email.value == ""){
        error.style.border = "none"
    }
}