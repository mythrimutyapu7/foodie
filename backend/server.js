const exp=require("express");
const mongoose=require("mongoose")
const recipeApp = require("./routes/recipeApi");
const app=exp()
const dotenv=require("dotenv").config()

const PORT=process.env.PORT || 3000;

mongoose.connect(process.env.DBURL).
then(()=>{
    app.listen(PORT,(err)=>{
        console.log(`Server is running on ${PORT}`)
    })
    console.log("DB Connection successful")
}).
catch(err=>{
    console.log(`Error while connecting..${err}`)
})

app.use(exp.json())
app.use("/recipe-api",recipeApp)

