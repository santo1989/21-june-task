

  let ex8=[
    { name: "Ali", age: 30, salary: 5000, bonus: 500, tax: 1000, medical: 500 },
    { name: "John", age: 25, salary: 8000, bonus: 1500, tax: 2500, medical: 1000 },
    { name: "Fabiano", age: 35, salary: 1500, bonus: 500, tax: 200, medical: 500 },
    { name: "Alireza", age: 40, salary: 4500, bonus: 1000, tax: 900, medical: 1000 },
    { name: "Peter", age: 20, salary: 2000, bonus: 0, tax: 0, medical: 0 },
    { name: "Paul", age: 25, salary: 1000, bonus: 0, tax: 0, medical: 0 },
    { name: "Mark", age: 30, salary: 5000, bonus: 500, tax: 1000, medical: 500 },
    { name: "Steven", age: 35, salary: 8000, bonus: 1500, tax: 2500, medical: 1000 },
    { name: "Chris", age: 25, salary: 1500, bonus: 500, tax: 200, medical: 500 },
    

];

let app8= document.querySelector('#demo')
let appfilter8= document.querySelector('#filter')
let appreduce8= document.querySelector('#reduce')

let domscript8= ex8.map((item) =>{
    return `<div class="card">
    <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">
            <ul>
                <li>age: ${item.age}</li>
                <li>salary: ${item.salary}</li>
                <li>bonus: ${item.bonus}</li> 
                <li>tax: ${item.tax}</li>
                <li>medical: ${item.medical}</li>
            </ul>
        </p>
    </div>
</div>
`;
    
}
);

let filterdemoscript8= ex8.filter((item) => item.salary > 2000)
.map(item => item.salary + item.bonus +item.medical - item.tax)
 .reduce((acc, item) => acc + item, 0)
    .toFixed(2);




 let reducedemoscript8= ex8.reduce((acc, item) => {
        return acc + item.age;
    }
    , 0)



function myFunction8() {
app8.innerHTML = domscript8.join('');
appfilter8.innerHTML = (filterdemoscript8);
appreduce8.innerHTML = reducedemoscript8;

}