

function myFunction6() {

  // async function getResponse() {
  //   const response = await fetch(
  //     'https://picsum.photos/v2/list',
  //     {
  //       method: 'GET',
  //     }
  //   );
  //   if (!response.ok) {
  //     throw new Error(`HTTP error! status: ${response.status}`);
  //   }
  //   const data = await response.json();
  //   console.log(data);
  // }
  // getResponse();



  

  fetch('https://picsum.photos/200/300')
.then(response => response.blob())
.then(blob => {
  
  // console.log(blob)
  for (let i = 0; i < 20; i++) {
    let img = document.createElement('img');
    img.src = URL.createObjectURL(blob);
    img.style.width = '100px'
    img.style.height = '100px'
    img.style.margin = '10px'
    img.style.borderRadius = '5px'
    document.body.appendChild(img);
    document.getElementById('imageList').appendChild(img);
  }

}
).catch(error => console.log(error));
}
