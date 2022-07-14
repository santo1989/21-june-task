console.clear();
    const ctx = document.getElementById('barChart').getContext('2d');

        fetch('https://api.coinpaprika.com/v1/coins/btc-bitcoin')
                .then((response) => response.json())
                .then((data) => {
                    const barChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: data.tags.map(tag => tag.name),
                            datasets: [
                                {
                                    label: 'Bitcoin Price Index',
                                    
                                    data:  data.tags.map(tag => tag.coin_counter),
                                        
                                    backgroundColor:  ['rgba(255, 132, 99, 0.2)'],
                                    borderColor: '#4cfbb3',
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
