
const number = document.querySelector("h2");
const button = document.querySelector("button");

button.onclick = () => {
    const randomNumber = Math.ceil(Math.random()*10);
    number.innerHTML = "Number: " + randomNumber
    console.log(randomNumber)
}