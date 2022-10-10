let ex3 =[
    {
        "id": 1151,
        "friendly": [
            "essential",
            "won",
            "better",
            "lunch",
            "any"
        ],
        "crop": {
            "sun": true,
            "happened": 61.49279731943993,
            "low": true
        },
        "few": "clock changing",
        "excellent": null,
        "dried": null,
        "condition": 75.67139304511639,
        "arrive": null
    }
];

let app3 = document.querySelector('#demo')

        let domscript3 = ex3.map((item) => {
            return `<div class="card">
            <div class="card-body">
                <h5 class="card-title">${item.id}</h5>
                <p class="card-text">
                    <ul>
                        <li>${item.friendly}</li>
                        <li>${item.crop}</li>
                        <li>${item.few}</li>
                        <li>${item.excellent}</li>
                        <li>${item.dried}</li>
                        <li>${item.condition}</li>
                        <li>${item.arrive}</li>
                    </ul>
                </p>
            </div>
        </div>
        `;
        })

       

 function myFunction3() {
        app3.innerHTML = domscript3.join('');
        
      }