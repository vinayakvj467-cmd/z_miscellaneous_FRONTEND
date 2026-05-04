

let stockPic = document.getElementById("stock-pic")
let stockName = document.getElementById("owner")
let stockPrice = document.getElementById("price")
let stockDirection = document.getElementById("arrow")
let stockDescription = document.getElementById("desc")
let stockTimestamp = document.getElementById("timestamp")
let arrow = document.getElementById("arrow")
let previousPrice = 0

setInterval(() => {
    let stock = getStockData()
    renderStock(stock)
}, 1500)

function getStockData() {
    return {
        pic: "./images/stock.jpg",
        name: "Reliance",
        description: "This is reliance stock",
        price: (Math.random() * 3).toFixed(2),
        timeStamp: new Date()
    }
}

function renderStock(stock) {
    let { pic, name, description, price, timeStamp } = stock
    stockPic.src = pic
    stockName.innerText = name
    stockPrice.innerText = price
    stockDescription.innerText = description
    stockTimestamp.innerText = timeStamp
    arrow.src = previousPrice < price ? "./images/up.jpg" : "./images/down.jpg"
    previousPrice = price
}








