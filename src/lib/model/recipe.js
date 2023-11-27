import mongoose from "mongoose"

const  productModel = new mongoose.Schema({
    name:String,
    ingr:String,
    time:String,
    cost:String
})

export const Product =mongoose.models.recipes || mongoose.model("recipes",productModel)