const mongoose=require('mongoose')

const recipeSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    ingredients:{
        type:String,
        required:true
    },
    instructions:{
        type:String,
        required:true
    },
    time:{
        type:String,
    },
    recipeImage:{
        type:String,
        required:true
    }
},{timestamp:true})

const Recipe=mongoose.model("Recipes",recipeSchema);
module.exports=Recipe