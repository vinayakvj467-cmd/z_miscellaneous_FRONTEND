

let disEle = document.getElementById("disp-el")
let num1, mum2, result, oprt 

function number(a) {
    if(disEle.innerText !== "0"){
        disEle.innerText += a
    }else {
        disEle.innerText = a
    }
}

function operation(str) {
    if(str !== "=") {
        num1 = parseInt(disEle.innerText)
        oprt = str
        disEle.innerText = "0"
    }else {
        num2 = parseInt(disEle.innerText)
        if (oprt === "+") {
            result = num1 + num2
        }else if (oprt === "-") {
            result = num1 - num2
        }else if (oprt === "*") {
            result = num1 * num2
        }else if (oprt === "/") {
            result = num1 / num2
        }
        disEle.innerText = result
    }
}

function square() {
    num1 = parseInt(disEle.innerText)
    result = num1 * num1
    disEle.innerText = result
}

function cube() {
    num1 = parseInt(disEle.innerText)
    result = num1 * num1 * num1
    disEle.innerText = result
}

function cler() {
    num1 = 0
    num2 = 0
    result = 0
    disEle.innerText = result
}





