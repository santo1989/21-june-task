 let first =[
    {
        "id": "62b982d2aa8a236f3e4953f1",
        "children": [
            {
                "name": "Kendall Stafford",
                "age": 1
            },
            {
                "name": "Charity Rush",
                "age": 4
            },
            {
                "name": "Dae Figueroa",
                "age": 7
            },
            {
                "name": "Shawn Burke",
                "age": 6
            },
            {
                "name": "Campbell Bryant",
                "age": 1
            }
        ],
        "currentJob": {
            "title": "Developer",
            "salary": "mask;"
        },
        "jobs": [
            {
                "title": "medic",
                "salary": "R$ 0.138,67"
            },
            {
                "title": "teacher",
                "salary": "R$ 6.370,68"
            }
        ],
        "maxRunDistance": 19,
        "cpf": "469.613.742-20",
        "cnpj": "24.333.786/0001-27",
        "pretendSalary": "R$ 9.413,96",
        "age": 49,
        "gender": "male",
        "firstName": "August",
        "lastName": "Burke",
        "phone": "+55 (83) 94578-0275",
        "address": "120 Norwood Avenue - Elbert, North Carolina, Latvia.",
        "hairColor": "rose"
    }

];

let app = document.querySelector('#demo')

        let domscript = first.map((item) => {
            return `<div class="card">
            <div class="card-body">
                <h5 class="card-title">${item.firstName} ${item.lastName}</h5>
                <p class="card-text">
                    <ul>
                        <li>CPF: ${item.cpf}</li>
                        <li>CNPJ: ${item.cnpj}</li>
                        <li>Pretend Salary: ${item.pretendSalary}</li>
                        <li>Age: ${item.age}</li>
                        <li>phone: ${item.phone}</li>
                        <li>address: ${item.address}</li>
                        <li>hairColor: ${item.hairColor}</li>
                        <li>currentJob: ${item.currentJob.title}</li>
                        <li>maxRunDistance: ${item.maxRunDistance}</li>
                        <li>jobs: ${item.jobs[0].title}</li>
                        <li>jobs: ${item.jobs[1].title}</li>
                        <li>children: ${item.children[0].name}</li>
                        <li>children: ${item.children[1].name}</li>
                        <li>children: ${item.children[2].name}</li>
                        <li>children: ${item.children[3].name}</li>
                        <li>children: ${item.children[4].name}</li>
                        
                    </ul>
                </p>
            </div>
        </div>
        `;
        })
       

 function myFunction() {
        app.innerHTML = domscript.join('');
        
      }