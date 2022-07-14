
 
 function countryListFetch() {
    console.clear();
   
    const ul = document.getElementById('countryList');
    ul.innerHTML = "";  
    const url = 'https://gist.githubusercontent.com/manishtiwari25/0fa055ee14f29ee6a7654d50af20f095/raw/5e432e65e6ec418700f0de0fda4eca72513834e7/country_state.json';
      fetch(url).then((res) => {
      if(!res.ok) {
      const message = 'Error: ${res.status}';
      throw new Error(message);
      }
      return res.json();
      })
      .then((res) => {
      console.log(res);
     const work= res.forEach((country) => {
      const li = document.createElement('li');
      li.innerHTML = `<span>${country.name} </span>`;
      li.innerHTML += `<span>(${country.countryCode})</span>`;
      ul.appendChild(li);
      });
      })
      .catch((err) => {
      console.log(err);
      });
        
      }
      function myFunction5() {
        countryListFetch();
      }
