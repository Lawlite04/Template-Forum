const menuToggle = document.querySelector('.menu-toggle input');
const navbar = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    if(menuToggle.checked == true){
        navbar.classList.add('slide');
    }else{
        navbar.classList.remove('slide');
    }
});