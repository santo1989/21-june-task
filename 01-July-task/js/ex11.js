let list =[
    {l1:'Shahin, a private job holder, said he would manage an alternative transport for Tuesday. Many like him returned home empty-handed from the railway station yesterday.'},
    {l2:'Meanwhile, this correspondent found some passengers who chose to stay back at the station for tickets for Wednesday.'},
    {l3:'I did not visit home during Eid-ul-Fitr holidays for my newborn. My parents are eager to see his face. This time, said another passenger who chose to stay back at the station'}
];


function datainput (){
 for(let i=0; i<list.length; i++){
    let random = Math.floor(Math.random()*i);
    document.getElementById('ex11').innerHTML = list[random].l1;
    }}
function myFunction11(){

   datainput();
}



   