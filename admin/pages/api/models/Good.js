import {model ,Schema} from "mongoose";
import mongoose from 'mongoose';  // Add this import statement

const {} = mongoose;
const GoodSchema = new Schema({
     title: {type: String , required:true},
     description: String,
     price:{ type: Number ,required: true}
});

const Good = mongoose.models.Good || model('Good', GoodSchema);
export { Good };