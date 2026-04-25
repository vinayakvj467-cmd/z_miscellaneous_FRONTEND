let chars = []
let input = document.getElementById("input-char")
let radio = document.getElementById("rd-in")
let result1 = document.getElementById("res1")
let result2 = document.getElementById("res2")
let popupE = document.getElementById("popup")

function addChars() {
    for (let i = 0; i < 26; i++) {
        chars.push(String.fromCharCode(i + 65))
    }
    for (let i = 0; i < 26; i++) {
        chars.push(String.fromCharCode(i + 97))
    }
    for (let i = 0; i < 10; i++) {
        chars.push(String.fromCharCode(i + 48))
    }
    let arr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "{", "[", "}", "]", "?"]
    chars.push(...arr)
    console.log(chars)
}

addChars()

function generate() {
    let rdIn = radio.value
    let charCount = input.value
    let password1 = ""
    let password2 = ""
    for (let i = 0; i < charCount; i++) {
        if (rdIn) {
            password1 += chars[Math.floor(Math.random() * chars.length)]
        } else {
            password1 += chars[Math.floor(Math.random() * 62)]
        }
    }
    for (let i = 0; i < charCount; i++) {
        if (rdIn) {
            password2 += chars[Math.floor(Math.random() * chars.length)]
        } else {
            password2 += chars[Math.floor(Math.random() * 62)]
        }
    }
    result1.innerText = password1
    result2.innerText = password2
}

async function copyText1() {
    try {
        await navigator.clipboard.writeText(result1.innerText)
        popup("text copied ")
    } catch (error) {
        console.log("Error")
    }
}

async function copyText2() {
    try {
        await navigator.clipboard.writeText(result2.innerText)
        popup("text copied ")
    } catch (error) {
        console.log("Error")
    }
}

function popup(text) {
    popupE.innerText += text + "!"
}


