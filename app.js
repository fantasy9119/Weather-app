const request = require('postman-request')

// const url = 'http://api.weatherstack.com/current?access_key=98260dd65c168d580fa241ee00d0e75e&query=-33.4985,-70.5756'

// request({ url: url, json: true }, (error, response) =>{
//     console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature +' degress out. It feels like ' + response.body.current.feelslike + ' degress out.')
// })

const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2tpcmluZyIsImEiOiJja2dreTRrNXIwdjFhMnNwZXlqem11aTl5In0.ZJ5yV8SKrGeVNNytClya3Q&limit=1'

request({url: url2, json: true}, (error, response) => {
    console.log(response.body.features[0].center)
})

//Geocoding
// Address -> Lat/Long -> Weather