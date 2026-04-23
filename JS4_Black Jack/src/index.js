
let cardArray = [
    [
        {
            path: "./images/1_1.jpg",
            points: 14
        },
        {
            path: "./images/1_2.jpg",
            points: 2
        },
        {
            path: "./images/1_3.jpg",
            points: 3
        },
        {
            path: "./images/1_4.jpg",
            points: 4
        },
        {
            path: "./images/1_5.jpg",
            points: 5
        },
        {
            path: "./images/1_6.jpg",
            points: 6
        },
        {
            path: "./images/1_7.jpg",
            points: 7
        },
        {
            path: "./images/1_8.jpg",
            points: 8
        },
        {
            path: "./images/1_9.jpg",
            points: 9
        },
        {
            path: "./images/1_10.jpg",
            points: 10
        },
        {
            path: "./images/1_11.jpg",
            points: 11
        },
        {
            path: "./images/1_12.jpg",
            points: 12
        },
        {
            path: "./images/1_13.jpg",
            points: 13
        }
    ],
    [
        {
            path: "./images/2_1.jpg",
            points: 14
        },
        {
            path: "./images/2_2.jpg",
            points: 2
        },
        {
            path: "./images/2_3.jpg",
            points: 3
        },
        {
            path: "./images/2_4.jpg",
            points: 4
        },
        {
            path: "./images/2_5.jpg",
            points: 5
        },
        {
            path: "./images/2_6.jpg",
            points: 6
        },
        {
            path: "./images/2_7.jpg",
            points: 7
        },
        {
            path: "./images/2_8.jpg",
            points: 8
        },
        {
            path: "./images/2_9.jpg",
            points: 9
        },
        {
            path: "./images/2_10.jpg",
            points: 10
        },
        {
            path: "./images/2_11.jpg",
            points: 11
        },
        {
            path: "./images/2_12.jpg",
            points: 12
        },
        {
            path: "./images/2_13.jpg",
            points: 13
        }
    ],
    [
        {
            path: "./images/4_1.jpg",
            points: 14
        },
        {
            path: "./images/4_2.jpg",
            points: 2
        },
        {
            path: "./images/4_3.jpg",
            points: 3
        },
        {
            path: "./images/4_4.jpg",
            points: 4
        },
        {
            path: "./images/4_5.jpg",
            points: 5
        },
        {
            path: "./images/4_6.jpg",
            points: 6
        },
        {
            path: "./images/4_7.jpg",
            points: 7
        },
        {
            path: "./images/4_8.jpg",
            points: 8
        },
        {
            path: "./images/4_9.jpg",
            points: 9
        },
        {
            path: "./images/4_10.jpg",
            points: 10
        },
        {
            path: "./images/4_11.jpg",
            points: 11
        },
        {
            path: "./images/4_12.jpg",
            points: 12
        },
        {
            path: "./images/4_13.jpg",
            points: 13
        }
    ],
    [
        {
            path: "./images/4_1.jpg",
            points: 14
        },
        {
            path: "./images/4_2.jpg",
            points: 2
        },
        {
            path: "./images/4_3.jpg",
            points: 3
        },
        {
            path: "./images/4_4.jpg",
            points: 4
        },
        {
            path: "./images/4_5.jpg",
            points: 5
        },
        {
            path: "./images/4_6.jpg",
            points: 6
        },
        {
            path: "./images/4_7.jpg",
            points: 7
        },
        {
            path: "./images/4_8.jpg",
            points: 8
        },
        {
            path: "./images/4_9.jpg",
            points: 9
        },
        {
            path: "./images/4_10.jpg",
            points: 10
        },
        {
            path: "./images/4_11.jpg",
            points: 11
        },
        {
            path: "./images/4_12.jpg",
            points: 12
        },
        {
            path: "./images/4_13.jpg",
            points: 13
        }
    ]
]
currentCards = []
let secWr1 = document.getElementById("sec-wrapper1")
let secWr2 = document.getElementById("sec-wrapper2")

function generateRandomCard() {
    let num1 = Math.floor(Math.random() * 4) + 1
    let num2 = Math.floor(Math.random() * 13) + 1
    return cardArray[num1][num2]
}

function startGame() {
    secWr1.innerHTML = ""
    secWr2.innerHTML = ""
    for (let i = 0; i < 6; i++) {
        currentCards[i] = generateRandomCard()
        let str = `
        <div class = "card-wrapper" onclick="fun(${i})">
            <img id = "img${i}" class = "card-img" src="./images/cardback.jpg" alt="">
            <p id = "p${i}">?</p>
        </div>
    `
        if (i < 3)
            secWr1.innerHTML += str
        else
            secWr2.innerHTML += str
    }
}

function fun(i) {
    let sumElY = document.getElementById("y-sum")
    let sumElB = document.getElementById("b-sum")
    if (i === 0) {
        let imgEl0 = document.getElementById("img0")
        let imgEl3 = document.getElementById("img3")
        let pEl0 = document.getElementById("p0")
        let pEl3 = document.getElementById("p3")
        imgEl0.src = currentCards[0].path
        imgEl3.src = currentCards[3].path
        pEl0.innerText = currentCards[0].points
        pEl3.innerText = currentCards[3].points
        sumElY.innerText = parseInt(sumElY.innerText) + currentCards[0].points
        sumElB.innerText = parseInt(sumElB.innerText) + currentCards[3].points
    } else if (i === 1) {
        let imgEl1 = document.getElementById("img1")
        let imgEl4 = document.getElementById("img4")
        let pEl1 = document.getElementById("p1")
        let pEl4 = document.getElementById("p4")
        imgEl1.src = currentCards[1].path
        imgEl4.src = currentCards[4].path
        pEl1.innerText = currentCards[1].points
        pEl4.innerText = currentCards[4].points
        sumElY.innerText = parseInt(sumElY.innerText) + currentCards[1].points
        sumElB.innerText = parseInt(sumElB.innerText) + currentCards[4].points
    } else if (i === 2 ) {
        let imgEl2 = document.getElementById("img2")
        let imgEl5 = document.getElementById("img5")
        let pEl2 = document.getElementById("p2")
        let pEl5 = document.getElementById("p5")
        imgEl2.src = currentCards[2].path
        imgEl5.src = currentCards[5].path
        pEl2.innerText = currentCards[2].points
        pEl5.innerText = currentCards[5].points
        sumElY.innerText = parseInt(sumElY.innerText) + currentCards[2].points
        sumElB.innerText = parseInt(sumElB.innerText) + currentCards[5].points
    }
}













