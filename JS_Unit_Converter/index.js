


let input = document.getElementById("in")
let btn = document.getElementById("main-btn")
let outputs = document.querySelectorAll(".output")

btn.addEventListener("click", function () {
    let inp = parseInt(input.value)
    outputs[0].textContent = `${inp * 0.621371}`
    outputs[1].textContent = `${inp * 1.09361}`
    outputs[2].textContent = `${inp * 3.28084}`
    outputs[3].textContent = `${inp * 0.393701}`
    outputs[4].textContent = `${inp * 1.60934}`
    outputs[5].textContent = `${inp * 0.9144}`
    outputs[6].textContent = `${inp * 0.3048}`
    outputs[7].textContent = `${inp * 2.54}`
    outputs[8].textContent = `${inp * 2.20462}`
    outputs[9].textContent = `${inp * 0.035274}`
    outputs[10].textContent = `${inp * 0.453592}`
    outputs[11].textContent = `${inp * 28.3495}`
    outputs[12].textContent = `${inp * 0.264172}`
    outputs[13].textContent = `${inp * 3.78541}`
    outputs[14].textContent = `${inp * 1.8 + 32}`
    outputs[15].textContent = `${inp + 273.15}`
    outputs[16].textContent = `${(inp - 32) / 0.5555555}`
    outputs[17].textContent = `${inp - 273.15}`
})



