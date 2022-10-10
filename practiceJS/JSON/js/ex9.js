

  let ex9=[
    {
        "min_position": 6,
        "has_more_items": false,
        "items_html": "Bus",
        "new_latent_count": 7,
        "data": {
           "length": 24,
           "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        "numericalArray": [
           27,
           28,
           30,
           27,
           23
        ],
        "StringArray": [
           "Nitrogen",
           "Carbon",
           "Nitrogen",
           "Nitrogen"
        ],
        "multipleTypesArray": 3,
        "objArray": [
           {
              "class": "upper",
              "age": 5
           },
           {
              "class": "middle",
              "age": 6
           },
           {
              "class": "middle",
              "age": 5
           },
           {
              "class": "middle",
              "age": 9
           },
           {
              "class": "upper",
              "age": 2
           }
        ]
     }
    

];

let app9= document.querySelector('#demo')
let domscript9= ex9.map((item) =>{
    return `<div class="card">
    <div class="card-body">
        <h5 class="card-title">${item.min_position}</h5>
        <p class="card-text">
            <ul>
                <li>has_more_items: ${item.has_more_items}</li>
                <li>items_html: ${item.items_html}</li>
                <li>new_latent_count: ${item.new_latent_count}</li>
                <li>data: ${item.data.length}</li>
                <li>numericalArray: ${item.numericalArray}</li>
                <li>StringArray: ${item.StringArray}</li>
                <li>multipleTypesArray: ${item.multipleTypesArray}</li>
                <li>objArray: ${item.objArray}</li>
            </ul>
        </p>
    </div>
</div>
`;
    
}
);



function myFunction9() {
app9.innerHTML = domscript9.join('');

}