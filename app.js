const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const url = 'http://api.weatherstack.com/current?access_key=98260dd65c168d580fa241ee00d0e75e&query=-33.4985,-70.5756'

// request({ url: url, json: true }, (error, response) =>{
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     }  else if (response.body.error) {
//         console.log('Unable to find location')
//         console.log(response.body.error.info)
//     } else { 
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature +' degress out. It feels like ' + response.body.current.feelslike + ' degress out.')
//     }
// })





// geocode('Santiago peñalolen la hijuela poniente 4196', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })


//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-33.497919, -70.576784, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })