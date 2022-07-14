let b = [ {
    "min_position": 5,
    "has_more_items": true,
    "items_html": "Car",
    "new_latent_count": 9,
    "data": {
       "length": 25,
       "text": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    "numericalArray": [
       26,
       23,
       31,
       26,
       29
    ],
    "StringArray": [
       "Nitrogen",
       "Carbon",
       "Carbon",
       "Oxygen"
    ],
    "multipleTypesArray": "Hello",
    "objArray": [
       {
          "class": "lower",
          "age": 9
       },
       {
          "class": "upper",
          "age": 8
       },
       {
          "class": "lower",
          "age": 2
       },
       {
          "class": "lower",
          "age": 2
       },
       {
          "class": "lower",
          "age": 8
       }
    ]
 } ];

    let app1 = document.querySelector('#demo')
    let appfilter = document.querySelector('#filter')
    let appreduce = document.querySelector('#reduce')
 

    let domscript1 = b.map((item) => {
        return `<div class="card">
        <div class="card-body">
            <h5 class="card-title">${item.min_position}</h5>
            <p class="card-text">
                <ul>
                    <li>${item.items_html}</li>
                    <li>${item.data.length}</li>
                    <li>${item.data.text}</li>
                    <li>${item.numericalArray}</li>
                    <li>${item.StringArray}</li>
                    <li>${item.multipleTypesArray}</li>
                    <li>${item.objArray}</li>
                </ul>
            </p>
        </div>
    </div>
    `;
    }
    )

    function myFunction12() {
    app1.innerHTML = domscript1.join('')



        const KnumericalArray =b.map((item)=>{
            return item.numericalArray;
        })
        console.log(KnumericalArray);
    
        
            const KobjArray = b.filter((item)=>{
                return item.objArray.age < 8;
            })
            console.log(KobjArray);
    
            const objArray = b.reduce((acc, item)=>{
                return acc + item.objArray.age;
            })
            console.log(objArray);
    
        const KStringArray =b.map((item)=>{
            return item.StringArray;
        })
        console.log(KStringArray);}

