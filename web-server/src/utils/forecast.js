const request = require('postman-request')




const forecast = (latitude,longitude,callback) => {
    
    const url = 'http://api.weatherstack.com/current?access_key=98260dd65c168d580fa241ee00d0e75e&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, {body} = {}) =>{
        if (error) {
            callback('Unable to connect to weather service!',undefined)
        }  else if (body.error) {
            callback('Unable to find location\n'+ body.error.info, undefined)
            
        } else { 
            callback(undefined,body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature +' degrees out. It feels like ' + body.current.feelslike + ' degrees out.' + ' The humidity is ' + body.current.humidity + '%.')
        }
    })
}

module.exports = forecast