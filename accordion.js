let markUp = document.querySelectorAll('.accordion .accordion-header .markDown');
let accordions = document.querySelectorAll('.accordion .accordion-content');

for(let i = 0; i < markUp.length; i++) {
    markUp[i].addEventListener('click', function() {
        if(accordions[i].classList.contains('active')) {
            markUp[i].innerHTML = '<i class="fa-solid fa-angle-down"></i>';
        }else{
            markUp[i].innerHTML = '<i class="fa-solid fa-angle-up"></i>';
        }
        accordions[i].classList.toggle('active');
    });
}