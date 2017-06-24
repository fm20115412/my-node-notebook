/**
 * Created by fm_babybear on 2017/6/24.
 */
var fs=require('fs')
class App{
    constructor(){}
    initServer(){
        return (request,response)=>{
            fs.readFile('./public/index.html','utf-8',(error,data)=>{
                response.end(data)
            })
        }
    }
}
module.exports=App