// Sale statistics

const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
const data = {
    labels: labels,
    datasets: [
        {
            label: 'Sales',
            backgroundColor: '#018cb14f',
            borderColor: '#2C78DC',
            data: [0, 10, 5, 2, 20, 30, 45, 20, 30, 45, 20, 30],
            fill: true,
            tension: .4
        },
        {
            label: 'Visitors',
            backgroundColor: '#00ff9b4a',
            borderColor: '#04D182',
            data: [1, 7, 19, 22, 33, 39, 41, 19, 22, 33, 39, 41],
            fill: true,
            tension: .4
        },
        {
            label: 'Products',
            backgroundColor: '#ff59b42b',
            borderColor: '#FFCDE9',
            data: [5, 12, 33, 44, 18, 37, 34, 33, 44, 18, 37, 34],
            fill: true,
            tension: .4
        },
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
    }
};

const myChartSale = new Chart(
    document.getElementById('sale_statistics'),
    config
);

// revenue base on area

const labels2 = ['900', '1200', '1400', '1600'];
const data2 = {
    labels: labels2,
    datasets: [
        {
            label: 'US',
            data: [200, 400, 300, 100],
            backgroundColor: '#3281FF',
            borderWidth: 0
        },
        {
            label: 'Europe',
            data: [300, 500, 400, 350],
            backgroundColor: '#4ADF5E',
            borderWidth: 0
        },
        {
            label: 'Asia',
            data: [300, 500, 400, 350],
            backgroundColor: '#FF7151',
            borderWidth: 0
        },
        {
            label: 'Africa',
            data: [900, 750, 600, 400],
            backgroundColor: '#D595E5',
            borderWidth: 0
        },
    ]
};

const config2 = {
    type: 'bar',
    data: data2,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
    },
};

const myChartRev = new Chart(
    document.getElementById('revenue'),
    config2
);
