const express = requier ("express");
const app = exspress()
const port = 8080;


app.use(express.jason(({exstended : true})))
app.use(express.urlencoded(({exstended : true})))
app.use(cors);

 app.get("/",(res,req)=>{
    res.send({massage :"success"})
 });



app.listen(port,()=>{
    console.log(`server listen on port :${port}`);
})
    
