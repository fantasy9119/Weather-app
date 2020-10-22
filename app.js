const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=98260dd65c168d580fa241ee00d0e75e&query=-33.4985,-70.5756'

request({ url: url, json: true }, (error, response) =>{
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature +' degress out. It feels like ' + response.body.current.feelslike + ' degress out.')
})