const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=98260dd65c168d580fa241ee00d0e75e&query=-33.4985,-70.5756'

request({ url: url }, (error, response) =>{
    const data = JSON.parse(response.body)
    console.log(data.current)
})