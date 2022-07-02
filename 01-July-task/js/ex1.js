let Countries = [
	{
		"name": "Afghanistan",
		"code": "AF",
		"capital": "Kabul",
		"region": "AS",
		"currency": {
			"code": "AFN",
			"name": "Afghan afghani",
			"symbol": "؋"
		},
		"language": {
			"code": "ps",
			"name": "Pashto",
		},
		"flag": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AF.svg",
	},
	{
		"name": "Åland Islands",
		"code": "AX",
		"capital": "Mariehamn",
		"region": "EU",
		"currency": {
			"code": "EUR",
			"name": "Euro",
			"symbol": "€"
		},
		"language": {
			"code": "sv",
			"name": "Swedish",
		},
		"flag": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AX.svg",
	},
	{
		"name": "Albania",
		"code": "AL",
		"capital": "Tirana",
		"region": "EU",
		"currency": {
			"code": "ALL",
			"name": "Albanian lek",
			"symbol": "L"
		},
		"language": {
			"code": "sq",
			"name": "Albanian",
		},
		"flag": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AL.svg",
	},
	{
		"name": "Algeria",
		"code": "DZ",
		"capital": "Algiers",
		"region": "AF",
		"currency": {
			"code": "DZD",
			"name": "Algerian dinar",
			"symbol": "د.ج"
		},
		"language": {
			"code": "ar",
			"name": "Arabic",
		},
		"flag": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DZ.svg",
	},
	{
		"name": "American Samoa",
		"code": "AS",
		"capital": "Pago Pago",
		"region": "OC",
		"currency": {
			"code": "USD",
			"name": "United State Dollar",
			"symbol": "$"
		},
		"language": {
			"code": "en",
			"name": "English",
		},
		"flag": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AS.svg",
	},
	{
		"name": "Andorra",
		"code": "AD",
		"capital": "Andorra la Vella",
		"region": "EU",
		"currency": {
			"code": "EUR",
			"name": "Euro",
			"symbol": "€"
		},
		"language": {
			"code": "ca",
			"name": "Catalan",
		},
		"flag": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AD.svg",
	},
	
	{
		"name": "Angola",
		"code": "AO",
		"capital": "Luanda",
		"region": "AF",
		"currency": {
			"code": "AOA",
			"name": "Angolan kwanza",
			"symbol": "Kz"
		},
		"language": {
			"code": "pt",
			"name": "Portuguese",
		},
		"flag": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AO.svg",
	},
	{
		"name": "Anguilla",
		"code": "AI",
		"capital": "The Valley",
		"region": "NA",
		"currency": {
			"code": "XCD",
			"name": "East Caribbean dollar",
			"symbol": "$"
		},
		"language": {
			"code": "en",
			"name": "English",
		},
		"flag": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AI.svg",
	},
	{
		"name": "Antigua and Barbuda",
		"code": "AG",
		"capital": "Saint John's",
		"region": "NA",
		"currency": {
			"code": "XCD",
			"name": "East Caribbean dollar",
			"symbol": "$"
		},
		"language": {
			"code": "en",
			"name": "English",
		},
		"flag": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AG.svg",
	},
	{
		"name": "Argentina",
		"code": "AR",
		"capital": "Buenos Aires",
		"region": "SA",
		"currency": {
			"code": "ARS",
			"name": "Argentine peso",
			"symbol": "$"
		},
		"language": {
			"code": "es",
			"name": "Spanish",
		},
		"flag": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AR.svg",
	},
	{
		"name": "Armenia",
		"code": "AM",
		"capital": "Yerevan",
		"region": "AS",
		"currency": {
			"code": "AMD",
			"name": "Armenian dram",
			"symbol": null
		},
		"language": {
			"code": "hy",
			"name": "Armenian",
		},
		"flag": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AM.svg",
	},
	{
		"name": "Aruba",
		"code": "AW",
		"capital": "Oranjestad",
		"region": "SA",
		"currency": {
			"code": "AWG",
			"name": "Aruban florin",
			"symbol": "ƒ"
		},
		"language": {
			"code": "nl",
			"name": "Dutch",
		},
		"flag": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AW.svg",
	},
	{
		"name": "Australia",
		"code": "AU",
		"capital": "Canberra",
		"region": "OC",
		"currency": {
			"code": "AUD",
			"name": "Australian dollar",
			"symbol": "$"
		},
		"language": {
			"code": "en",
			"name": "English",
		},
		"flag": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg",
	}];


	//  console.log(Countries);

// let countryList = Countries.map(country => {
// 	return `<table style="border=1">
// 	<thead>
// 		<tr>
// 				<th>Name</th>
// 				<th>Capital</th>
// 				<th>Region</th>
// 				<th>Currency</th>
// 				<th>Language</th>
// 				<th>Flag</th>
// 		</tr>
// 	</thead>
// 				<tbody>
// 					<tr>
// 						<td>${country.name}</td>
// 						<td>${country.capital}</td>
// 						<td>${country.region}</td>
// 						<td>${country.currency.name}</td>
// 						<td>${country.language.name}</td>
// 						<td><img src="${country.flag}" alt="${country.name}"></td>
// 					</tr>
// 				</tbody>
// 			</table>`
// }
// ).join('');






// let countryList = Countries.map(country => {
// 	let table = document.createElement('table');
// 	table.className = 'table';
// 	let tr = document.createElement('tr');
// 	let td = document.createElement('td');
// 	let th = document.createElement('th');
// 	th.innerHTML = 'Name';
// 	td.innerHTML = country.name;
// 	tr.appendChild(th);
// 	tr.appendChild(td);
// 	table.appendChild(tr);
// 	let tr2 = document.createElement('tr');
// 	let td2 = document.createElement('td');
// 	let th2 = document.createElement('th');
// 	th2.innerHTML = 'Capital';
// 	td2.innerHTML = country.capital;
// 	tr2.appendChild(th2);
// 	tr2.appendChild(td2);
// 	table.appendChild(tr2);
// 	let tr3 = document.createElement('tr');
// 	let td3 = document.createElement('td');
// 	let th3 = document.createElement('th');
// 	th3.innerHTML = 'Region';
// 	td3.innerHTML = country.region;
// 	tr3.appendChild(th3);
// 	tr3.appendChild(td3);
// 	table.appendChild(tr3);
// 	let tr4 = document.createElement('tr');
// 	let td4 = document.createElement('td');
// 	let th4 = document.createElement('th');
// 	th4.innerHTML = 'Currency';
// 	td4.innerHTML = country.currency.name;
// 	tr4.appendChild(th4);
// 	tr4.appendChild(td4);
// 	table.appendChild(tr4);
// 	let tr5 = document.createElement('tr');
// 	let td5 = document.createElement('td');
// 	let th5 = document.createElement('th');
// 	th5.innerHTML = 'Language';
// 	td5.innerHTML = country.language.name;
// 	tr5.appendChild(th5);
// 	tr5.appendChild(td5);
// 	table.appendChild(tr5);
// 	let tr6 = document.createElement('tr');
// 	let td6 = document.createElement('td');
// 	let th6 = document.createElement('th');
// 	th6.innerHTML = 'Flag';
// 	td6.innerHTML = country.flag;
// 	tr6.appendChild(th6);
// 	tr6.appendChild(td6);
// 	table.appendChild(tr6);
// 	return table;
// }
// );

// let app = document.querySelector('#demo')
			
// //  document.getElementById('table').innerHTML = countryList;
 
       

//  function myFunction() {
//         app.innerHTML = countryList;
        
//       }

// let Table = document.createElement('table');
// Table.className = 'table';
// let tr = document.createElement('tr');
// let td = document.createElement('td');
// let th = document.createElement('th');
// th.innerHTML = 'Name';
// th.innerHTML = 'Capital';
// th.innerHTML = 'Region';
// th.innerHTML = 'Currency';
// th.innerHTML = 'Language';
// th.innerHTML = 'Flag';
// let CountriesList = Countries.map(country => {
// 	td.innerHTML = country.name;
// 	td.innerHTML = country.capital;
// 	td.innerHTML = country.region;
// 	td.innerHTML = country.currency.name;
// 	td.innerHTML = country.language.name;
// 	td.innerHTML = country.flag;
// 	tr.appendChild(td);
// 	tr.appendChild(td);
// 	tr.appendChild(td);
// 	tr.appendChild(td);
// 	tr.appendChild(td);
// 	tr.appendChild(td);
// 	Table.appendChild(tr);
// 	return Table;
// }
// ).join('');



// let tr = document.createElement('tr');
// let td = document.createElement('td');
// let countryList = Countries.map(country => {
// 	return tr.innerHTML = `<td>${country.name}</td>
// <td>${country.capital}</td>
// <td>${country.region}</td>
// <td>${country.currency.name}</td>
// <td>${country.language.name}</td>
// <td><img src="${country.flag}" alt="${country.name}"></td>`

// });

// // console.log(countryList);

// let app = document.querySelector('#demo')
// function myFunction() {
// 	app.innerHTML = countryList;
// }



function myFunction() {
	
	let table = document.getElementById('tBody')
	let tr = document.createElement('tr')

	 Countries.map(data => {
		tr.innerHTML = `<td>${data.name}</td>
				<td>${data.capital}</td>
				<td>${data.region}</td>
				<td>${data.currency.name}</td>
				<td>${data.language.name}</td>
				<td><img src="${data.flag}" alt="${data.name}"></td>`
		 table.innerHTML += tr.innerHTML
	})
}