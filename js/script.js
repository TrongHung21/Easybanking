const btnhamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

btnhamburger.addEventListener('click',function (){
    header.classList.toggle('open');

    if (header.classList.contains('open')) {
        body.classList.add('noscroll');
        fadElems.forEach(function(element){
            element.classList.remove('fade-out')
            element.classList.add('fade-in');
        })
    }
    else {
        body.classList.remove('noscroll');
        fadElems.forEach(function(element){
            element.classList.remove('fade-in')
            element.classList.add('fade-out');
        })
    }
})