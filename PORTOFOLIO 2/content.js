var contactObject = document.getElementById('navContact');
var contactSlide = false;

function contact(param) {
    if (contactSlide === false) {
        contactSlide = true;
        contactObject.style.left = "60vw";
    } else {
        contactSlide = false;
        contactObject.style.left = "100vw";
    }

    param === "contact" ? location.href = "#home" : location.href = "";
    console.log(contactSlide)
}

function defaultClickContact() {
    contactSlide = false;
    contactObject.style.left = "100vw";
}

function btnScroll(param) {
    param === "product" ? location.href = "#productDiv" : location.href = "#galeryDiv"
}

window.addEventListener("scroll", function() {
    var element = document.querySelector(".navbar-container");

    if (window.scrollY > 890) {
        element.style.color = "white"
    } else {
        element.style.color = "black"
    }

    console.log(contactSlide)
})
console.log(contactSlide)

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formRequest').addEventListener('submit', function(event) {
        event.preventDefault(); 
        submitRequest();
    });
});

function submitRequest() {
    alert("Request Accepted")
}

var coffeeBtn = true;
var bakeryBtn = true;
var coffeeBlock = document.getElementById('coffeeBlock');
var bakeryBlock = document.getElementById('bakeryBlock')

function coffee() {
    if (coffeeBtn == true) {
        coffeeBtn = false;
        coffeeBlock.style.left = "0vw";
    } else {
        coffeeBtn = true;
        coffeeBlock.style.left = "100vw";
    }
}

function bakery() {
    if (bakeryBtn == true) {
        bakeryBtn = false;
        bakeryBlock.style.left = "0vw";
    } else {
        bakeryBtn = true;
        bakeryBlock.style.left = "100vw";
    }
}