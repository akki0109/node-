const express= require("express")

const app=express()

app.get("/",(req,res)=>{
    res.send("welcome this is mypage")
});
app.get("/akash",(req,res)=>{
    res.send("aksh page")
});
const port = process.env.port || 3000;
app.listen(port,()=>{
    console.log("server is running")
})
