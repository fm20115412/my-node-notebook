/**
 * Created by fm_babybear on 2017/6/24.
 */
var http = require('http');
var port=7000
var App=require('./app')
var server=new App()
http.createServer(server.initServer()).listen(port,()=>{
    console.log(`监听${port}成功，请用在空中转体720度然后用电饭煲打开 http://localhost:${port}`)
});