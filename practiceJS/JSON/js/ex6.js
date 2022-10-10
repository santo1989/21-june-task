

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

       

 function myFunction6() {
        app6.innerHTML = domscript6.join('');
        
      }