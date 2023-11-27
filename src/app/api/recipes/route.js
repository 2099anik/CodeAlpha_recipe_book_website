import { connectionstr } from "@/lib/db"
import { Product } from "@/lib/model/recipe";
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function GET(){
    let data =[];
    let success= true;
    try{
      await mongoose.connect(connectionstr);
      data=await Product.find();
    //   await mongoose.connection.close();
    }catch(error){
        data={result:"error"}
        success=false
    }
    return NextResponse.json({result:data,success})
}

export async function POST (request){
    const payload = await request.json();
    await mongoose.connect(connectionstr);
    let product = new Product(payload);
    const result = await product.save();
    return NextResponse.json({result,success:true})
}