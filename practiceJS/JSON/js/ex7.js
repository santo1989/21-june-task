

  let ex7=[
            { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
            { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
            { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
            { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
            { name: "John", salary: 3000, bonus: 0, tax: 0 },
            { name: "Peter", salary: 2000, bonus: 0, tax: 0 },
            { name: "Paul", salary: 1000, bonus: 0, tax: 0 },
            { name: "Mark", salary: 5000, bonus: 500, tax: 1000 },
            { name: "Steven", salary: 8000, bonus: 1500, tax: 2500 },
            { name: "Chris", salary: 1500, bonus: 500, tax: 200 },
            { name: "Mike", salary: 4500, bonus: 1000, tax: 900 },
            { name: "Joe", salary: 3000, bonus: 0, tax: 0 },

  ];

let app7= document.querySelector('#demo')

        let domscript7= ex7.map((item) =>{
            return `<div class="card">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">
                    <ul>
                        <li>salary: ${item.salary}</li>
                        <li>bonus: ${item.bonus}</li> 
                        <li>tax: ${item.tax}</li>
                    </ul>
                </p>
            </div>
        </div>
        `;
            
        }
        );

       

 function myFunction7() {
        app7.innerHTML = domscript7.join('');
        
      }