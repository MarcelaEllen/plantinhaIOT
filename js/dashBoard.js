async function fetchData() {
    const response = await fetch('https://plantinhaapp.azurewebsites.net/users');
    const data = await response.json();
    return data;
}

function getLastNData(data, n = 5) {
    return data.slice(0, n).reverse();
}

function updateChartData(data) {
    const labels = getLastNData(data).map(item => new Date(item.data).toLocaleTimeString());
    const temperatureData = getLastNData(data.map(item => item.temperatura));
    const humidityData = getLastNData(data.map(item => item.umidade));
    const lightData = getLastNData(data.map(item => item.luminosidade));

    dataTemperature.labels = labels;
    dataTemperature.datasets[0].data = temperatureData;

    dataHumidity.labels = labels;
    dataHumidity.datasets[0].data = humidityData;

    dataLight.labels = labels;
    dataLight.datasets[0].data = lightData;

    chartTemperature.update();
    chartHumidity.update();
    chartLight.update();
}


// Dados de exemplo para os gráficos
const dataTemperature = {
    labels: [],
    datasets: [{
        label: 'Temperatura Cº',
        data: [],
        fill: false,
        borderColor: '#ff5733',
        tension: 0.1
    }]
};

const dataHumidity = {
    labels: [],
    datasets: [{
        label: 'Umidade %',
        data: [],
        fill: false,
        borderColor: '#007bff',
        tension: 0.1
    }]
};

const dataLight = {
    labels: [],
    datasets: [{
        label: 'Luminosidade',
        data: [],
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

fetchData().then(updateChartData);