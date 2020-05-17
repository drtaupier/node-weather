const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b06beb7d88106fd35742f31d9b9865b5`)
    const celcius = Math.round(resp.data.main.temp - 273.15) + '°C';
    return celcius;
}


module.exports = {
    getClima
}