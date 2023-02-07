

const arr = [    "cia",    "yra",    "random",    "zodziai",    "labai",    "nedaug",    "itemu"]

const button = document.querySelector("button");
const word = document.querySelector("h1")

button.onclick = () => {
    const randomWord = arr[Math.floor(Math.random()*arr.length)]
    word.innerHTML = "Word: " + randomWord
    console.log(randomWord)
}