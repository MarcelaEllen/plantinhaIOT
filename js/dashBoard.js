// Dados de exemplo para os gráficos
const dataTemperature = {
    labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00'],
    datasets: [{
        label: 'Temperatura Cº',
        data: [22, 23, 24, 25, 26, 25],
        fill: false,
        borderColor: '#ff5733',
        tension: 0.1
    }]
};

const dataHumidity = {
    labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00'],
    datasets: [{
        label: 'Umidade %',
        data: [40, 42, 43, 45, 46, 44],
        fill: false,
        borderColor: '#007bff',
        tension: 0.1
    }]
};

const dataLight = {
    labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00'],
    datasets: [{
        label: 'Luminosidade',
        data: [800, 780, 760, 740, 720, 700],
        fill: false,
        borderColor: '#ffc107',
        tension: 0.1
    }]
};

// Opções para os novos gráficos (olhar na doc do chart.js se da pra usar, se fica legal e tal)
const optionsTemperature = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: false
            }
        }]
    }
};

const optionsHumidity = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: false
            }
        }]
    }
};

const optionsLight = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};

// Criar gráficos de linha
const ctxTemperature = document.getElementById('myChartTemperature').getContext('2d');
const ctxHumidity = document.getElementById('myChartHumidity').getContext('2d');
const ctxLight = document.getElementById('myChartLight').getContext('2d');

const chartTemperature = new Chart(ctxTemperature, {
    type: 'line',
    data: dataTemperature,
    options: optionsTemperature
});

const chartHumidity = new Chart(ctxHumidity, {
    type: 'line',
    data: dataHumidity,
    options: optionsHumidity
});

const chartLight = new Chart(ctxLight, {
    type: 'line',
    data: dataLight,
    options: optionsLight
});

// deixa o de umidade como default
document.getElementById('myChartTemperature').style.display = 'none';
document.getElementById('myChartHumidity').style.display = 'block';
document.getElementById('myChartLight').style.display = 'none';

// Funções para alternar entre os gráficos quando os botões são clicados
document.getElementById('temperatureBtn').addEventListener('click', function() {
    document.getElementById('myChartTemperature').style.display = 'block';
    document.getElementById('myChartHumidity').style.display = 'none';
    document.getElementById('myChartLight').style.display = 'none';
});

document.getElementById('humidityBtn').addEventListener('click', function() {
    document.getElementById('myChartTemperature').style.display = 'none';
    document.getElementById('myChartHumidity').style.display = 'block';
    document.getElementById('myChartLight').style.display = 'none';
});

document.getElementById('lightBtn').addEventListener('click', function() {
    document.getElementById('myChartTemperature').style.display = 'none';
    document.getElementById('myChartHumidity').style.display = 'none';
    document.getElementById('myChartLight').style.display = 'block';
});

