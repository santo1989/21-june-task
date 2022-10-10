ex14 = [
{
    "markers": [
      {
        "name": "Rixos The Palm Dubai",
        "position": [25.1212, 55.1535],
      },
      {
        "name": "Shangri-La Hotel",
        "location": [25.2084, 55.2719]
      },
      {
        "name": "Grand Hyatt",
        "location": [25.2285, 55.3273]
      }
    ]
  }]

let app14= document.querySelector('#demo')
let domscript14= ex14.map((item) =>{
return `<div class="card">
<div class="card-body">
    <h5 class="card-title">Markers: ${item.markers}</h5>
    <p class="card-text">Name: ${item.name}</p>
    <p class="card-text">
        <ul>
            <li>Position: ${item.position}</li>
            <li>Location: ${item.location}</li>
        </ul>
    </p>
</div>
</div>
`;
});

function myFunction14() {
app14.innerHTML = domscript14.join('');

}