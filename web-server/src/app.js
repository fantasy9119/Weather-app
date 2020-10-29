const path = require('path')
const express = require('express')


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})

app.get('/help', (req,res) => {
    res.send([{
        name: 'Fabian',
        age: 25
    },{
        name: 'ELWEONCITO',
        age: 24
    }])
})


app.get('/weather', (req,res) => {
    res.send({
        forecast: 'Sunny',
        location: 'Chile'
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})