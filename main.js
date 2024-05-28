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
    h11 = document.querySelector('.rover-hero-container>h1')
    h11.innerText = "We're the Cat People"
    p1 = document.querySelector('.rover-hero-container>p')
    p1.innerText = "Book trusted, local pet sitters and walkers who will care for your cat like you would."
    h31 = document.querySelector(".rover-fact-indiv-1>h3")
    h31.innerText="Cat Boarding"

    h32 = document.querySelector(".rover-fact-indiv-3>h3")
    h32.innerText="Cat walking"

    p2 = document.querySelector(".rover-fact-indiv-3>p")
    p2.innerText="Whenever your cat needs a walk."


    h33 = document.querySelector(".rover-fact-indiv-4>h3")
    h33.innerText="Catty Day Care"

    p3= document.querySelector(".rover-fact-indiv-4>p")
    p3.innerText="Daytime pet care in your sitter’s cat-friendly home."

    p4 = document.querySelector(".dogy")
    p4.innerText="cat"
    
    p4 = document.getElementsByClassName("dogy2")[0]
    console.log(p4);
    p4.innerText="Cat"
    h2 = document.querySelector(".rover-123-container>h2")
    h2.innerText = "We’re the treat-your-cat-like-family cat people"

    ttl = document.getElementsByTagName('title')[0]
    ttl.innerHTML = "Rover.com: Book Cat Boarding Services"
    

})
