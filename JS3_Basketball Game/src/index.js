

let team1disp = document.getElementById("t1-disp")
let team2disp = document.getElementById("t2-disp")

function teamm1(num) {
    let curreScore = 0
    curreScore = parseInt(team1disp.innerText) + parseInt(num)
    team1disp.innerText = curreScore
}

function teamm2(num) {
    let curreScore = 0
    curreScore = parseInt(team2disp.innerText) + parseInt(num)
    team2disp.innerText = curreScore
}


