// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mongoose from "mongoose";
import clientPromise from "@/lib/mongodb";
import { mongooseConnect } from "@/lib/mongoose";
import { Good } from "./models/Good";
export default async function handler(req, res) {
     const {method} = req;
  
      await mongooseConnect();

      if (method ==='GET'){
        if (req.query?.id){
            res.json(await Good.findOne({_id:req.query.id}));
        }else {
            res.json(await Good.find());
        }
       
      }
   
    if(method =='POST'){
    const {title ,description ,price ,category} = req.body;

    const productDoc = await Good.create({
        title ,description ,price,category,
    })
    res.json(productDoc)
    }

if (method == 'PUT'){
    const {title ,description , category,price ,_id} = req.body;
    {
      await  Good.updateOne({_id} ,{title ,description , category,price})
      res.json(true);
    }
}

if (method === 'DELETE'){
    if(req.query?.id){
        await Good.deleteOne({_id:req.query?.id});
        res.json(true);
    };
}
  }
  