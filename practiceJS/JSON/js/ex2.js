let ex2 =[
    {
        "name": "Viola Crona IV",
        "email": "eloy67@hotmail.com",
        "phone": "+1 (561) 472-9495",
        "description": "Libero occaecati est repellendus dolorem laborum. Maxime eum libero asperiores reprehenderit."
      },
      {
        "name": "Paris Becker",
        "email": "porter.reilly@bernier.biz",
        "phone": "+1-805-579-8175",
        "description": "Sequi ab quis recusandae nesciunt. Nostrum dolores porro et exercitationem qui reprehenderit. Debitis voluptatem eos fugit alias ut iste. Sunt ipsam aut sequi sed quia quia et."
      }
];

let app2 = document.querySelector('#demo')

        let domscript2 = ex2.map((item) => {
            return `<div class="card">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">
                    <ul>
                        <li>Email: ${item.email}</li>
                        <li>Phone: ${item.phone}</li>
                        <li>Description: ${item.description}</li>
                    </ul>
                </p>
            </div>
        </div>
        `;
        })



       

 function myFunction2() {
        app2.innerHTML = domscript2.join('');
        
      }