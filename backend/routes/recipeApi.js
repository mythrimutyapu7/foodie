const exp=require("express");
const recipeApp=exp.Router();
const Recipe=require("../models/recipe")

//get all recipes
recipeApp.get("/recipes",(async(req,res)=>{
    const recipies=await Recipe.find()
    res.json({message:"All Recipes details",payload:recipies})
}))

//get recipe by id
recipeApp.get("/recipes/:id",async(req,res)=>{
    const recipeId=await Recipe.findById(req.params.id);
    //console.log(recipeId)
    res.send({message:`Details of recipe with id ${recipeId._id}`,payload:recipeId})
})

//post recipe
recipeApp.post("/recipes",(async(req,res)=>{
    const newRecipeObj=req.body
    const newRecipe=new Recipe(newRecipeObj)
    const recipeObj=await newRecipe.save()
    res.status(201).send({message:"New Recipe created",payload:recipeObj})
}))

//update recipe
recipeApp.put("/recipes/:id",async(req,res)=>{
    const modifiedRecipe=req.body
    const modifiedRecipeId=req.params.id;
    //console.log(modifiedRecipe)
    const dbRes=await Recipe.findByIdAndUpdate(modifiedRecipeId,{...modifiedRecipe},{new:true})
    res.send({message:`Recipe with id ${modifiedRecipeId} updated as follows`,payload:dbRes})
})

//delete recipe
recipeApp.delete("/recipes/:id",async(req,res)=>{
    const recipeId=req.params.id;
    const deletedRecipe=await Recipe.findByIdAndDelete(recipeId)
    res.json({message:`Recipe with id ${recipeId} deleted`})
})


module.exports=recipeApp;