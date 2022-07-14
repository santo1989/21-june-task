

function myFunction() {
	console.clear();
const url =  'https://countriesnow.space/api/v0.1/countries/info?returns=currency,flag,unicodeFlag,dialCode,language,capital,region,name'

fetch(url).then((res)=>{
	if(res.ok){
		console.log('ok')
		return res.json();
	}
}).then((res)=>console.log(res)).catch((err)=>console.log(err));
}

