var fs = require('fs')

fs.readdir(__dirname+'/public',function(err,docs){
    if(err) {
        console.log(err)
        return
    }else {
        var ymd = [], hms = [], final = []
        var timeFinal = []
        for(let i of docs){
            let data = i.match(/\d+/g)
            ymd.push(data[2]+`000`)
            hms.push(data[3])
        }
        for(let i = 0; i < ymd.length; i++) {
            final.push(`${new Date(parseInt(ymd[i])).toLocaleString()}:${hms[i].slice(0,3)}:${hms[i].slice(3,6)}:${hms[i].slice(6,)}`)
        }
        console.log(final)
    }
})