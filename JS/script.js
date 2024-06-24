

(() => {
    'use strict';

    // Graphs
    const ctx = document.getElementById('myChart').getContext('2d');
    // eslint-disable-next-line no-unused-vars
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                '2015',
                '2016',
                '2017',
                '2018',
                '2019',
                '2020',
                '2021',
                '2022',
                '2023',
                '2024'
            ],
            datasets: [{
                data: [
                    15339,
                    21345,
                    48483,
                    39003,
                    157000,
                    207432,
                    248000,
                    245000,
                    350000,
                    370000
                ],
                lineTension: 0.6,
                backgroundColor: 'transparent',
                borderColor: '#007bff',
                borderWidth: 8,
                pointBackgroundColor: '#007bff'
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    boxPadding: 3
                }
            }
        }
    });
})();
