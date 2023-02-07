

const buttons = document.querySelectorAll("button");
const result = document.querySelector("h1");

let counter = 0;

buttons[0].onclick = () => {
    counter +=10;
    result.innerHTML = "Counter: " + counter;
}
buttons[1].onclick = () => {
    counter -=10;
    result.innerHTML = "Counter: " + counter;
}

