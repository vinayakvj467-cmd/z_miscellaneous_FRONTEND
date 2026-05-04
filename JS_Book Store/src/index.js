

let data = [
    {
        name: "Mahabharat",
        description: "This is a mahabharat book",
        price: 250
    },
    {
        name: "Ramayan",
        description: "This is a Ramayan book",
        price: 260
    },
    {
        name: "Bhagwatgeeta",
        description: "This is a Bhagwatgeeta book",
        price: 300
    }
]

let containerDiv = document.getElementById("container-div")


function render() {
    data.map(book => {
        containerDiv.innerHTML += `<div class="card">
            <h3>${book.name}</h3>
            <p>${book.description}</p>
            <p>${book.price}</p>
        </div>`
    })
}

render()
