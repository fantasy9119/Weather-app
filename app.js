const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')



geocode('Santiago peñalolen la hijuela poniente 4196', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})



forecast(-33.497919, -70.576784, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })