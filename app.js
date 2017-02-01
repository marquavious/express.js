
var express = require('express')
var app = express()
var exphbs  = require('express-handlebars');
var mongoose = require('mongoose');


// var posts = [
// { body: "the stuff" },
// { body: "the stuff" },
// { body: "the stuff" }
// ]

// MIDDLEWARE
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
mongoose.connect('mongodb://localhost/hello_world');
var Post = require('./models/post.js');



// ROUTES
app.get('/', function (req, res) {
    // Post.find(function (err, posts) {
    //     res.render('home', {posts:posts});
    // });
});

app.post('/posts',function(req, res) {
    console.log(req.body);
    var post = req.body
    Post.create(post, function (err,post){
        if(err) {
            console.log(err);
        }
        else {
            res.status(200).json(post)
        }
    })
})

app.listen(3000, function(){
    console.log('hello_world listening on port 3000!')
})
