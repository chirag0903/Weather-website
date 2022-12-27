const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=4f4d67692a0f0abf25f4a25d0c9f8a1e&units=metric'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        }
        else if (body.cod == 400) {
            callback('Unable to find the location!', undefined)
        }
        else {
            callback(undefined, body.weather[0].description+". It is currently " + body.main.temp + " degrees. But it feels like " + body.main.feels_like + " degree.")
        }
    })
}

module.exports = forecast