

  let ex6=[
    { name: "John", age: 21 },
    { name: "Oliver", age: 55 },
    { name: "Michael", age: 55 },
    { name: "Dwight", age: 19 },
    { name: "Oscar", age: 21 },
    { name: "Kevin", age: 55 },
    { name: "Angela", age: 19 },
    { name: "Jim", age: 55 },
    { name: "Toby", age: 19 },
    { name: "Ralph", age: 55 },
    { name: "Pam", age: 19 },
    { name: "Darryl", age: 55 },
    { name: "Phyllis", age: 19 },
    { name: "Stanley", age: 55 },
  ];

let app6= document.querySelector('#demo')
let appfilter6= document.querySelector('#filter')
let appreduce6= document.querySelector('#reduce')

        let domscript6= ex6.map((item) =>{
            return `<div class="card">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">

                    <ul>
                        <li>Age: ${item.age}</li>
                    </ul>
                </p>
            </div>
        </div>
        `;
        }
        );

       let filterdemoscript6= ex6.filter((item) => item.age > 10)
        .map(item => item.age);
         



        let reducedemoscript6= ex6.reduce((acc, item) => {
            return acc + item.age;
        }
        , )

       

 function myFunction6() {
        app6.innerHTML = domscript6.join('');
        appfilter6.innerHTML = (filterdemoscript6);
        appreduce6.innerHTML = reducedemoscript6;
        
      }