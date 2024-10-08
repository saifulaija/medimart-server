// import { Schema, model } from 'mongoose';
// import { TProduct, TProductSizeStock, Treviews } from './product.interface';

// const colorStockSchema = new Schema(
//   {
//     color: {
//       type: String,
//       required: true,
//     },
//     stock: {
//       type: Number,
//       required: true,
//       min: 0,
//     },
//   },
 
// );

// const productSizeSchema = new Schema<TProductSizeStock>({
//   size: String,
//   colorStock: colorStockSchema
// });
// const reviewSchema = new Schema<Treviews>({
//   reviewId:{
//     type:Schema.Types.ObjectId,
//     ref:"Review"
//   }
// })

// const productSchema = new Schema<TProduct>(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     productType:{
//       type:String,
//       required:true
//     },
//     category: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     images: {
//       type: [String],
//       required: true,
//     },
//     reviews: [
//       reviewSchema
//     ],
//     subCategory: {
//       type: String,
//     },
   
//     sellsQuantity: {
//       type: Number,
//       default: 0,
//     },
//     discount: {
//       type: Number,
//       default:0
//     },
//     productCode:{
//       type:String,
//       default:'shoe-09',
//       required:true
//     },
//     isDeleted: {
//       type: Boolean,
//       default: false,
//     },
//     tags: {
//       type:[String],
//     },
//     model:{
//       type:String,
//       required:true
//     },
//     material:{
//       type:String,
//       required:true
//     },
//     selectedColor: [productSizeSchema],
//     selectedSize:{
//       type:String,
//       default:'0'
//     }
//   },
  

//   {
//     timestamps: true,
//   },
// );

// export const Product = model<TProduct>('Product', productSchema);





// models/Product.ts
import { Schema, model, Types } from "mongoose";
import { IProduct } from "./product.interface";


const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    photos: [{ type: String, required: true }],
    description: { type: String, required: true },
    metaKey: { type: String },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    stockStatus: { type: Boolean, default: true },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    categories: [
      {
        primary: { type: Schema.Types.ObjectId, ref: "PrimaryCategory" },
        secondary: { type: Schema.Types.ObjectId, ref: "SecondaryCategory" },
        tertiary: { type: Schema.Types.ObjectId, ref: "TertiaryCategory" },
      },
    ],
    variants: [{ type: Schema.Types.ObjectId, ref: "Variant" }],
  },
  { timestamps: true }
);

export const Product = model<IProduct>("Product", productSchema);

