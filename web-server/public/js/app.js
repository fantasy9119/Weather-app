console.log('Client side javascript file is loaded!')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

fetch('http://localhost:3000/weather?address=la%20hijuela%20poniente%204196').then((response) => {
    response.json().then((data) => {
        if(data.error) {
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})