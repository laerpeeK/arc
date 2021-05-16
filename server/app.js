var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var session = require('express-session')

var User = require('./model/model')

var app = express()

//set port
app.set('port',3030)

//use body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//use cookie-parser
app.use(cookieParser('userInfo'))

//use session
app.use(session({
    name:'userInfo',
    secret: 'laerpeek',
    resave: false,
    saveUninitialized: true,
    proxy: true
}))



//methods pre measure
app.all('*',function(req, res,next) {
    next()
})

app.get('/',function(req, res){
    console.log(req.signedCookies)
    res.send('Hello')
})

app.post('/login', function(req, res){
    const username = req.body.username
    const password = req.body.password
    User.find({user:{username,password}},function(err, docs){
        if(err) {
            res.send(err)
            return
        } else {
            if(docs[0] === undefined) {
                res.send('failed')
            } else {
                req.session.userInfo = username.toString();
                res.send('success')
            }
        }
    })
})


app.get('/404',function(req, res){
    res.statusCode = 404
    res.send('404 -Not Found!')
})

app.listen(app.get('port'),function(){
    console.log('server started at port: '+app.get('port'))
})