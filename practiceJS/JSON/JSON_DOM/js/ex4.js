let ex4 =[
    {
        "wing": null,
        "brain": {
            "notice": {
                "song": [
                    "were",
                    "want",
                    "prove"
                ]
            },
            "long": [
                "help",
                "treated",
                "darkness",
                "said",
                "understanding"
            ],
            "know": {
                "anybody": {
                    "muscle": null,
                    "brought": [
                        "spite",
                        "suppose",
                        "has"
                    ]
                },
                "wave": "slight spring"
            }
        },
        "rice": null,
        "took": null,
        "single": 1402,
        "opinion": false,
        "almost": "end sure nobody driving",
        "visitor": "deep describe"
    }
    
];

let app4 = document.querySelector('#demo')
let appfilter4 = document.querySelector('#filter')
let appreduce4 = document.querySelector('#reduce')

        let domscript4 = ex4.map((item) => {
            return `<div class="card">
            <div class="card-body">
                <h5 class="card-title">${item.single}</h5>
                <p class="card-text">
                    <ul>
                        <li>${item.wing}</li>
                        <li>${item.brain}</li>
                        <li>${item.rice}</li>
                        <li>${item.took}</li>
                        <li>${item.opinion}</li>
                        <li>${item.almost}</li>
                        <li>${item.visitor}</li>
                    </ul>
                </p>
            </div>
        </div>
        `;
        })

       let filterdemoscript4 = ex4.filter((item) => {
            return item.brain.notice.song[0] === "were";
        }
         )



        let reducedemoscript4 = ex4.reduce((acc, item) => {
            return acc + item.single;
        }
        , )

       

 function myFunction4() {
        app4.innerHTML = domscript4.join('');
        appfilter4.innerHTML = (filterdemoscript4);
        appreduce4.innerHTML = reducedemoscript4;
        
      }