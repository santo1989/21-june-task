// console.clear();
const ltx = document.getElementById('lineChart').getContext('2d');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '62afeed88amshc167c1c41e348dcp113dc3jsn896459596f8a',
		'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
	}
};

fetch('https://community-open-weather-map.p.rapidapi.com/climate/month?q=Dhaka', options)
	.then(response => response.json())
    .then(data => { 
        const lineChart = new Chart(ltx, {
            type: 'line',
            data: {
                labels: data.list.map(item => item.dt),
                datasets: [
                  
                    {
                        label: 'Humidity',
                        data: data.list.map(item => item.humidity),
                        fill: true,
                        borderColor:'rgb(255, 99, 132)',
                        backgroundColor: 'rgb(255, 99, 132, 0.5)',borderWidth: 1
                      },
                      {
                        label: 'Wind Speed',
                        data: data.list.map(item => item.wind_speed),
                        fill: false,
                        borderColor: 'rgb(54, 162, 235)',
                        backgroundColor: 'rgb(54, 162, 235, 0.5)',borderWidth: 1
                      },
                      // {
                      //   label: 'pressure',
                      //   data: data.list.map(item => item.pressure),
                      //   fill: false,
                      //   borderColor: 'rgb(75, 192, 192)',
                      //   backgroundColor: 'rgb(75, 192, 192, 0.5)',  borderWidth: 1
                      // },
                        {
                        label: 'Temperature',
                        data: data.list.map(item => item.temp.average),
                        fill: false,
                        borderColor: 'rgb(255, 159, 64)',
                        backgroundColor: 'rgb(255, 159, 64, 0.5)',  borderWidth: 1
                        }
            
            ]
            },
            options: {
                    scales: {
                        x: {
                          display: true,
                          title: {
                            display: true,
                            text: 'Sample Number',
                            color: '#911',
                            font: {
                              family: 'Comic Sans MS',
                              size: 20,
                              weight: 'bold',
                              lineHeight: 1.2,
                            },
                            padding: {top: 20, left: 0, right: 0, bottom: 0}
                          }
                        },
                        y: {
                          display: true,
                          title: {
                            display: true,
                            text: 'Measurement Value',
                            color: '#191',
                            font: {
                              family: 'Times',
                              size: 20,
                              style: 'normal',
                              lineHeight: 1.2
                            },
                            padding: {top: 30, left: 0, right: 0, bottom: 0}
                          }
                        }
                      }
                
            }
        });
    }
    );















            