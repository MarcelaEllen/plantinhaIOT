# Plantinha Interativa

## Descrição do Projeto

A **Plantinha Interativa** é um projeto de IoT (Internet das Coisas) que visa criar um ambiente propício para o crescimento de plantas, com um charmoso toque regional inspirado no Nordeste do Brasil. Com um design que lembra um cacto vestindo um autêntico chapéu nordestino e com expressões típicas da região, a Plantinha Interativa traz um ar descontraído e acolhedor ao ambiente.

## Componentes Principais

Os componentes principais do projeto são:

- **Módulo WiFi ESP8266 NodeMCU**: Responsável pela conectividade e comunicação do sistema.
- **Sensor de Umidade do Solo**: Monitora a umidade do solo para garantir que a planta receba a quantidade adequada de água.
- **Sensor de Temperatura BMP280**: Mede a temperatura ambiente para assegurar condições ideais para o crescimento da planta.
- **Sensor de Luminosidade BH1750**: Avalia a quantidade de luz recebida pela planta, essencial para a fotossíntese.
- **Display LCD TFT de 1,8 polegadas**: Exibe informações em tempo real sobre as condições da planta.

## Funcionalidades

### Monitoramento em Tempo Real

A Plantinha Interativa monitora constantemente os parâmetros ambientais (umidade do solo, temperatura e luminosidade) e exibe essas informações em um painel de controle acessível via interface web.

### Interface Web

A interface web permite que os usuários visualizem dados de monitoramento através de gráficos interativos. A aplicação foi desenvolvida utilizando HTML, CSS, JavaScript e Bootstrap, garantindo um design responsivo e amigável.

#### Gráficos Interativos

Os dados de monitoramento são apresentados em gráficos de linha, permitindo uma análise visual das condições ambientais ao longo do tempo. Os gráficos são atualizados em tempo real, oferecendo informações precisas e atualizadas.

#### Navegação Fácil

A interface inclui uma barra lateral com opções para visualizar gráficos específicos de cada sensor (umidade, temperatura e luminosidade).

## Tecnologias Utilizadas

- **Hardware**: ESP8266 NodeMCU, BMP280, BH1750, Sensor de Umidade do Solo, Display LCD TFT.
- **Frontend**: HTML, CSS, JavaScript, Bootstrap.
- **Gráficos**: Chart.js.

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/plantinha-interativa.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd plantinha-interativa
    ```

3. Abra o arquivo `index.html` no seu navegador para visualizar a interface web.

## Como Usar

1. Abra a interface web no navegador.
2. Use a barra lateral para navegar entre os diferentes gráficos de monitoramento.
3. Visualize os dados em tempo real e monitore a saúde da sua plantinha.

## Equipe

- Marcela Ellen
- Guilherme Lucena
- Kelveny Malafaia
- Fernanda Melo
- Iúri Colaço

## Referências

https://getbootstrap.com/docs/5.3/getting-started/introduction/
https://www.chartjs.org/docs/latest/
