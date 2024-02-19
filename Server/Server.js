const HttpServer=require("http");
const Port=8000;
const Data=require("./Data/Data.json");
HttpServer.createServer((req,res)=>{
    console.log("server Running At port"+Port);
    res.write(JSON.stringify(Data))
    res.end()
}).listen(Port)
