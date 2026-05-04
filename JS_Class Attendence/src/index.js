


let data = [
    {
        id: 1,
        name: "Vinayak",
        age: 29,
        location: "Papinwar layout",
        grade: 10
    },
    {
        id: 2,
        name: "ayak",
        age: 25,
        location: "Papwar layout",
        grade: 9
    },
    {
        id: 3,
        name: "Vimbgd",
        age: 27,
        location: "Papr laut",
        grade: 8
    },
    {
        id: 4,
        name: "Amiuvbg",
        age: 29,
        location: "Papinkusdcg  yuagshck hyut",
        grade: 10
    },
    {
        id: 5,
        name: "gabnf",
        age: 27,
        location: "ksiudvh inkjsdhvdv yudvcyout",
        grade: 9
    },
    {
        id: 6,
        name: "blu",
        age: 35,
        location: "Narak ufhv",
        grade: 1
    }
]

let input = document.getElementById("input-el")
let containerDiv = document.getElementById("container")
let button = document.getElementById("btn-ent")

button.addEventListener("click", function() {
    let id = parseInt(input.value)
    data.map((stu) => {
        if(stu.id === id){
            containerDiv.innerHTML += `<div class="card">
            <h3>${stu.name}</h3>
            <p>${stu.location}</p>
            <p>${stu.age}</p>
            <h3>${stu.grade}</h3>
        </div>`
        } else {

        }
    })
})


