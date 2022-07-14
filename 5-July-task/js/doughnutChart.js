console.clear();
    const dtx = document.getElementById('doughnutChart').getContext('2d');

    BgColor = Array.from({length: 11}, () => 'rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')');
//    console.log(Color);
  
    const options = {
        method: 'GET',
        headers: {
            // 'X-RapidAPI-Key': '62afeed88amshc167c1c41e348dcp113dc3jsn896459596f8a',
            // 'X-RapidAPI-Host': 'world-population-by-decade-and-growth-rate.p.rapidapi.com'

            'X-RapidAPI-Key': 'c9eb15bc4emshba5e560fd4b1598p136ee6jsnedbef4b7bbb3',
		    'X-RapidAPI-Host': 'world-population-by-decade-and-growth-rate.p.rapidapi.com'
        }
    };
    
    // fetch('https://world-population-by-decade-and-growth-rate.p.rapidapi.com/yDRaVL/world_population_by_decade?decade=10', options)
    fetch('https://world-population-by-decade-and-growth-rate.p.rapidapi.com/yDRaVL/world_population_by_decade?decade=10', options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        // .catch(err => console.error(err)); 
        
                    const doughnutChart = new Chart(dtx, {
                        type: 'doughnut',
                        data: {
                            labels: data.map(item => item.Year),
                            datasets: [
                                {
                                    label: 'Growth Rate',
                                    
                                    data: data.map(item => item["Growth Rate"]),    
                                    backgroundColor: BgColor.map(item => item),
                                    // [
                                    //     'rgba(255, 132, 99, 0.2)',
                                    //     'rgba(54, 162, 235, 0.2)',
                                    //     'rgba(255, 06, 86, 0.2)',
                                    //     'rgba(75, 192, 192, 0.2)',
                                    //     'rgba(153, 102, 255, 0.2)',
                                    //     'rgba(255, 159, 64, 0.2)',
                                    //     'rgba(255, 199, 132, 0.2)',
                                    //     'rgba(54, 162, 235, 0.2)',
                                    //     'rgba(255, 016, 86, 0.2)',
                                    //     'rgba(75, 092, 192, 0.2)',
                                    //     'rgba(153, 012, 255, 0.2)',
                                    //     'rgba(255, 059, 64, 0.2)'
                                    // ],
                                    borderColor: '#4cfbb3',
                                    //  [
                                    //     'rgba(255, 99, 132, 1)',
                                    //     'rgba(54, 162, 235, 1)',
                                    //     'rgba(255, 206, 86, 1)',
                                    //     // 'rgba(75, 192, 192, 1)',
                                    //     // 'rgba(153, 102, 255, 1)',
                                    //     // 'rgba(255, 159, 64, 1)'
                                    // ],
                                    borderWidth: 1
                                }
                            ]
                        },
                        options: {
                            scales: {
                                // yAxes: [
                                //     {
                                //         ticks: {
                                //             beginAtZero: true
                                //         }
                                //     }
                                // ]
                                
                            }
                        }
                    });
                }
        );
