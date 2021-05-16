const mongoose = require('mongoose')

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
})

var User = mongoose.model('Clc0', UserSchema)
module.exports = User