// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// import './components'
console.log('hello from application.js')

ScrollReveal().reveal('.card', { delay: 500, duration: 1000, rotate: {x: 5, y:5, z:0,} });


const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["make websites🧑‍💻", "design websites🎨", "deploy websites🚀", "teach languages👨🏼‍🏫"];

let textArrayIndex = 0;
let charIndex = 0;

const erase = () => {
  if (charIndex > 0) {
    cursor.classList.remove('blink');
    typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 80);
  } else {
    cursor.classList.add('blink');
    textArrayIndex++;
    if (textArrayIndex > textArray.length - 1) {
      textArrayIndex = 0;
    }
    setTimeout(type, 1000);
  }
}

const type = () => {
  if (charIndex <= textArray[textArrayIndex].length - 1) {
    cursor.classList.remove('blink');
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 120);
  } else {
    cursor.classList.add('blink');
    setTimeout(erase, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
})
