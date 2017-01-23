var express = require('express')
var app = express()

var myLogger = function(req,res,next){
    res.send('LOGGED')
    next()
}

var requestTime = function(req,res,next){
    req.requestTime = Date.now()
    next()
}

// app.use(myLogger)
app.use(requestTime)
app.get('/', function (req,res){
    var responseText = 'Hello World!<br>'
      responseText += '<small>Requested at: ' + req.requestTime + '</small>'
      res.send(responseText)
})


/*
app.post('/', function (req, res) {
  res.send('Got a POST request')
})
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})
*/

app.listen(3000, function(){
    console.log('hello_world listening on port 3000!')
})
