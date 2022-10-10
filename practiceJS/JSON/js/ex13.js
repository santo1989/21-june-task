ex13 = [
    {
        "id": 1,
        "name": "John",
        "age": 25,
        "salary": 1000
    },
    {
        "id": 2,
        "name": "Sara",
        "age": 30,
        "salary": 2000
    },
    {
        "id": 3,
        "name": "Mark",
        "age": 28,
        "salary": 3000
    },
    {
        "id": 4,
        "name": "Pam",
        "age": 27,
        "salary": 4000
    }
]

let app13= document.querySelector('#demo')
let domscript13= ex13.map((item) =>{
return `<div class="card">
<div class="card-body">
    <h5 class="card-title">ID: ${item.id}</h5>
    <p class="card-text">Name: ${item.name}</p>
    <p class="card-text">
        <ul>
            <li>Age: ${item.age}</li>
            <li>Salary: ${item.salary}</li>


        </ul>
    </p>
</div>
</div>
`;
}
);



function myFunction13() {
app13.innerHTML = domscript13.join('');

}

