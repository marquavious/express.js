
var express = require('express')
var app = express()
var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/posts', function (req, res){
    var post = [
    { body: "the stuff" },
    { body: "the stuff" },
    { body: "the stuff" }
  ]
  res.render('posts', {posts:post})
});

app.listen(3000, function(){
    console.log('hello_world listening on port 3000!')
})
