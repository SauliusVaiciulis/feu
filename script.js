
const cookie = document.querySelector("img");
const points = document.querySelector("h1");
const buttons = document.querySelectorAll("button")

let counter = 900;
let number = 1

cookie.onclick = () => {
    counter +=number;
    points.innerHTML = "Points: " + counter
}

buttons[0].onclick = () => {
    if (counter >= 100) {
        counter -=100;
        points.innerHTML = "Points: " + counter
        number = 2
    }
}
buttons[1].onclick = () => {
    if (counter >= 300) {
        counter -=300;
        points.innerHTML = "Points: " + counter
        number = 3
    }
}
buttons[2].onclick = () => {
    if (counter >= 500) {
        counter -=500;
        points.innerHTML = "Points: " + counter
        cookie.style.backgroundColor = "red"
    }
}
buttons[3].onclick = () => {
    if (counter >= 500) {
        counter -=500;
        points.innerHTML = "Points: " + counter
        cookie.src = "https://th.bing.com/th/id/OIP.P0rBWOTEfRzZV3AWoYFuwgHaHa?pid=ImgDet&rs=1"
    }
}




