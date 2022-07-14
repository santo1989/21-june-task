
function myFunction3(){
console.clear();
const ul = document.getElementById('demo');
ul.innerHTML = '';
const url = 'https://countriesnow.space/api/v0.1/countries/iso';
  fetch(url).then((res) => {
  if(!res.ok) {
  const message = 'Error: ${res.status}';
  throw new Error(message);
  }
  return res.json();
  })
  .then((res) => console.log(res))
  .catch((err) => {
  console.log(err);
  });

}