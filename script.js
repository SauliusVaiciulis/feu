

const boxes = document.querySelectorAll(".box")


const upgradeBorder = (index) => {
    boxes[0].style.border = "none"
    boxes[1].style.border = "none"
    boxes[2].style.border = "none"

    boxes[index].style.border = "2px solid red"
}

boxes[0].onclick = () => upgradeBorder(0)
boxes[1].onclick = () => upgradeBorder(1)
boxes[2].onclick = () => upgradeBorder(2)

