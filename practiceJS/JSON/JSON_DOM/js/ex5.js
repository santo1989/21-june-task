let ex5 =[
    {
        "id": [
            "purple",
            "speech"
        ],
        "class": true,
        "slipped": 50.7933702803556,
        "sides": null,
        "dust": 36.755265502285155,
        "more": "tune",
        "sing": {
            "breath": 1165,
            "soap": null
        },
        "salmon": {
            "giant": null,
            "term": [
                3029,
                3718,
                577,
                2571
            ],
            "origin": 68.55569871035259
        },
        "function": {
            "flow": {
                "peace": false
            },
            "closely": [
                2382,
                133,
                1862
            ]
        },
        "fear": null
    }
];

let app5 = document.querySelector('#demo')
let appfilter5 = document.querySelector('#filter')
let appreduce5 = document.querySelector('#reduce')

        let domscript5 = ex5.map((item) => {
            return `<div class="card">
            <div class="card-body">
                <h5 class="card-title">${item.id}</h5>
                <p class="card-text">
                    <ul>
                        <li>${item.class}</li>
                        <li>${item.slipped}</li>
                        <li>${item.sides}</li>
                        <li>${item.dust}</li>
                        <li>${item.more}</li>
                        <li>${item.sing}</li>
                        <li>${item.salmon}</li>
                        <li>${item.function}</li>
                        <li>${item.fear}</li>
                    </ul>
                </p>
            </div>
        </div>
        `;
        })

       let filterdemoscript5 = ex5.filter((item) => {
            return item.class === true;
        }
         )



        let reducedemoscript5 = ex5.reduce((acc, item) => {
            return acc + item.class;
        }
        , )

       

 function myFunction5() {
        app5.innerHTML = domscript5.join('');
        appfilter5.innerHTML = (filterdemoscript5);
        appreduce5.innerHTML = reducedemoscript5;
        
      }