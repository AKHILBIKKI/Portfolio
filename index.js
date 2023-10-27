
let headerElement = document.querySelector('header');
let menuopenElement = document.querySelector('.menu_open');
let menucloseElement = document.querySelector('.menu_close');
let menuElement = document.querySelectorAll('.menu');

menuopenElement.addEventListener("click",open);
// menuElement.addEventListener("click",close);
menucloseElement.addEventListener("click",close);

menuElement.forEach( item =>{
    item.addEventListener("click",close);
});

function open(){
    menuopenElement.style = `visibility: hidden;`;
    menucloseElement.style = `visibility: visible;`;
    headerElement.classList.add('header_class');
}

function close(){
    menuopenElement.style = `visibility: visible;`;
    menucloseElement.style = `visibility: hidden;`;
    headerElement.classList.remove('header_class');
}