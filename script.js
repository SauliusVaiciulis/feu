

const boxes = document.querySelectorAll(".box")
const collor = document.querySelector("h1")

boxes[0].onclick = () => {
    collor.innerHTML = "COLLOR RED"
}
boxes[1].onclick = () => {
    collor.innerHTML = "COLLOR AQUA"
}
boxes[2].onclick = () => {
    collor.innerHTML = "COLLOR PINK"
}