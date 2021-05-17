var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var session = require('express-session')
var user = require('./user')
const mongoose = require('mongoose')
var app = express()
var User = undefined


//连接数据库
mongoose.connect('mongodb://localhost:27017/arc',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', function(){
    console.log('数据库连接成功！')
})
//创建约束模式
var Schema = mongoose.Schema

//创建Schema（模式）对象
var UserSchema = new Schema({
    user: Object,
    name: String,
    enname: Number,
    level: Number,
    length: Number,
    pre: Number,
    rate: Number,
    ret:Number,
    reset: Number,
    adBit: Number,
    debugModel:Number,
    debugTriger: Number,
    absParms: Number,
    relParams: Number,
    encode: Number,
    location: Number,
    channelNum: Number,
    watchDog: Number,
    ipAddress: String,
    mask: String,
    gateWay: String,
    dns: String,
    mac: String,
    text: Number,
    binary: Number,
    filetime: Array
})

//set port
app.set('port',3030)

//use body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//use cookie-parser
app.use(cookieParser('laerpeek'))

//use session
app.use(session({
    name:'userInfo',
    secret: 'laerpeek',
    resave: false,
    saveUninitialized: false,
    proxy: true
}))


//methods pre measure
app.all('*',function(req, res,next) {
    next()
})

app.get('/',function(req, res){
    if(req.session.userInfo && req.signedCookies.name){
        res.send('login')
    } else {
        res.redirect('/404')
    }
})

app.get('/loginOut',function(req, res){
    res.clearCookie('userInfo')
    res.clearCookie('name')
    res.send('loginOut success')
})

app.get('/status',function(req,res){
    console.log(req.query.timeStart, req.query.timeEnd)
    User.find({name:'time'},function(err, docs){
        if(err){
            res.send(err)
            return
        }
        var arr = Array.from(docs[0]['_doc']['filetime']).sort((a,b)=>{
            return a-b
        })
        res.send( arr.filter((num)=>{
            return  num>= req.query.timeStart && num<= req.query.timeEnd
        }))
    })
})

app.get('/system/channel/:id',function(req,res){
    if(!req.session.userInfo){
        res.redirect('/login')
    }
    User.find({name:req.params.id},function(err,docs){
        if(err){
            res.send(err)
            return
        }
        res.send(docs)
    })
})

app.get('/system/:name',function(req,res){
    if(!req.session.userInfo){
        res.redirect('/login')
    }
    User.find({name:req.params.name}, function(err,docs){
        if(err){
            res.send(err)
            return
        }
        res.send(docs)
    })
})

app.post('/login', function(req, res){
    const username = req.body.username
    const password = req.body.password
    if(typeof user[username] === 'undefined'){
        res.send('Error: username')
        return
    }
    User = mongoose.model(`${user[username]}`, UserSchema)

    User.find({user:{username, password}},function(err, docs){
        if(err) {
            res.send(err)
            return
        } else {
            if(docs[0] === undefined) {
                res.send('Error: password')
            } else {
                req.session.userInfo = username.toString()
                res.cookie('name',username.toString(),{signed: true})
                res.send('success')
            }
        }
    })
})

app.post('/system/collection',function(req,res) {
    console.log(req.body)
    User.update({name:'collections'},{
        reset: req.body.reset,
        adBit: req.body.adBit,
        debugModel: req.body.debugModel,
        debugTriger: req.body.debugTriger,
        absParams: req.body.absParams,
        relParams: req.body.relParams
    },function(err,docs){
        if(err){
            res.send(err)
            return
        }
        res.send(docs)
    })
})

app.get('/404',function(req, res){
    res.statusCode = 404
    res.send('404 -Not Found!')
})

app.listen(app.get('port'),function(){
    console.log('server started at port: '+app.get('port'))
})