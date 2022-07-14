
 function myFunction2() {
axios.get('https://countriesnow.space/api/v0.1/countries/info?returns=currency,flag,unicodeFlag,dialCode,language,capital,region,name')
.then((response) => {
  response.data = country.json();
  for(let key in country) {
    console.log(key, country[key]);
    document.getElementById('tBody').innerHTML += `<tr>
                  <td>${country.name}</td> 
                  <td>${country.capital}</td>
                  <td> ${country.region}</td> 
                  <td>${country.currency}</td>     
                  <td> ${country.language}</td>   
                  <td> ${country.flag}</td> 
                  </tr>`;
  }
}
).catch((error) => {
  console.log(error);
}
);
}