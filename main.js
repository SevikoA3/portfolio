const text = document.querySelector(".multiText");
const text1Cont = document.querySelector(".text1");
const text2Cont = document.querySelector(".helloworld");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Programmer.";
    }, 0);
    setTimeout(() => {
        text.textContent = "Photographer.";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Videographer.";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);

function myFunction(x) {
    if (x.matches) { 
        text1Cont.innerHTML = "My name is <b>Seviko Attalarik</b> and<br>I'm a ";
        text2Cont.innerHTML = "Hello, World!";
    }else {
        text1Cont.innerHTML = "My name is <b>Seviko Attalarik</b> and I'm a<br> ";
        text2Cont.innerHTML = "Hello,<br>World!";
    }
}

var x = window.matchMedia("(min-width: 1137px)");
myFunction(x);
x.addListener(myFunction);