const HttpServer=require("http");
const Port=8000;
const Data=require("./Data/Data.json");

HttpServer.createServer((req,res)=>{
    console.log("server Running At port"+Port);

    if(req.url=="/intern"){
        res.write(JSON.stringify(Data))
    }
    else{
        res.write("Hello World!,This Is Paramasivan-BSM")
    }
    res.end()
}).listen(Port)
