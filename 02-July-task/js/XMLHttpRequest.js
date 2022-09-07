function myFunction4() {
    
// const options = {
//     method: 'get',
//     headers: {
//       "Content-Type": "application/json",
//       "x-access-token": "token-value",
//     }
//   };
//   try {
//     const response = await fetch('https://countriesnow.space/api/v0.1/countries/iso', options);
//     if (!response.ok) {
//       const message = 'Error with Status Code: ' + response.status;
//       throw new Error(message);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log('Error: ' + err);
//   }


     

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://countriesnow.space/api/v0.1/countries/iso');
xhr.send(null);

xhr.onreadystatechange = function () {
  var DONE = 4; // readyState 4 means the request is done.
  var OK = 200; // status 200 is a successful return.
  if (xhr.readyState === DONE) {
    if (xhr.status === OK) {
      console.log(xhr.responseText); // 'This is the returned text.'
    } else {
      console.log('Error: ' + xhr.status); // An error occurred during the request.
    }
  }
}; }