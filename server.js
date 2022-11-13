const express = requier ("express");
const app = exspress()
const port = 8080;

app.use(express.jason(({exstended : true})))
app.use(express.urlencoded(({exstended : true})))

 AudioParam.length("/",(res,req)=>{
    res.send({massage :"seccess"})
 });



App.listen(port,()=>{
    console.log(`server listen on port :${port}`);
})
    
