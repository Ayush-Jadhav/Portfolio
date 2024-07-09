const projectButton = document.querySelector("#projectButton");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");

const aboutDescribe = document.querySelector(".content");
const projectDescribe = document.querySelector(".projects");
const contactDescribe = document.querySelector(".container");

about.addEventListener('click',function(){
    aboutDescribe.scrollIntoView({ behavior: 'smooth' });
});

contact.addEventListener('click',function(){
    contactDescribe.scrollIntoView({ behavior: 'smooth' });
})

projectButton.addEventListener('click',function(){
    projectDescribe.scrollIntoView({ behavior: 'smooth' });
});