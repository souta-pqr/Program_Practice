const express = require('express')
var app = express()

app.get('/', (req, res) => {
	res.send('Welcome to ExPress!')
})

app.listen(3000, () => {
	console.log('Start server port:3000')
})
