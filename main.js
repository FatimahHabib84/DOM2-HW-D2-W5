// burqure menue
var burgerMenu = document.querySelector('.dropdown>button');
var overlay = document.getElementsByClassName('dropdown-content')[0];
console.log(burgerMenu)
burgerMenu.addEventListener('click', function() {
  overlay.classList.toggle("overlay");
  
});

// -----------------------------------------------------
logo = document.getElementsByClassName('logo')[0]
logo.addEventListener('click',()=>{
    roverHeroContainer = document.getElementsByClassName('rover-hero-container')[0]
    console.log(roverHeroContainer)
    roverHeroContainer.style.backgroundImage = 'url("https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
    roverHeroContainer.style.color = 'black';
    dog = document.getElementById('dog')
    cat = document.getElementById('cat')
    dog.style.display = "none"
    cat.style.display = "block"
    roverActionShot = document.getElementsByClassName('rover-action-shot')[0]
    roverActionShot.style.backgroundImage = `url("https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`

})
