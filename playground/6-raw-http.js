const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=98260dd65c168d580fa241ee00d0e75e&query=45,-75'

const request = http.request(url, (response) => {

    let data = ''

    response.on('data', (chunk) => {
        console.log(chunk)

    })

    response.on('end', () => {

    })

})

request.end()