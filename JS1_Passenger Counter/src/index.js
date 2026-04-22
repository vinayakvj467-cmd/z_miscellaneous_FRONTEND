
let disEl = document.getElementById("dispel")
let svEl = document.getElementById("svel")
let count = parseInt(disEl.innerText)

function increment() {
    count += 1
    disEl.innerText = count
}

function save() {
    svEl.textContent += "(" + disEl.innerText + ") "
    disEl.innerText = 0
    count = 0
}




