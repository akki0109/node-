const express= require("express")

const app=express()

app.get("/",(req,res)=>{
    res.send("welcome this is mypage")
});
app.get("/akash",(req,res)=>{
    res.send("aksh page")
});
app.listen(3001,()=>{
    console.log("server is running")
})
