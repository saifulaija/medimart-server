// // import { Types } from 'mongoose';

// // export type TProductSizeStok = {
// //   size: string;
// //   stock: number;
// // };

// // export type Treviews = {
// //   reviewId: Types.ObjectId;
// // };

// // export type TProduct = {
// //   name: string;
// //   category: string;
// //   price: number;
// //   description: string;
// //   images: string[];
// //   model: string;
// //   material: string;
// //   productType: string;
// //   tag?: string;
// //   productCode?: string;
// //   isDeleted?: boolean;
// //   reviews?: Treviews[];
// //   sellsQuantity?: number;
// //   subCategory: string;
// //   discount?: number;
// //   sizeStok: TProductSizeStok[];
// //   selectedSize?: string;
// // };
// import { Types } from 'mongoose';

// export type TProductSizeStock = {
//   size: string;
//   colorStock: {
//     color: string;
//     stock: number;
//   }[];
// };

// export type Treviews = {
//   reviewId: Types.ObjectId;
// };

// export type TProduct = {
//   name: string;
//   category: string;
//   price: number;
//   description: string;
//   images: string[];
//   model: string;
//   material: string;
//   productType: string;
//   tags: string[];
//   productCode?: string;
//   isDeleted?: boolean;
//   reviews?: Treviews[];
//   sellsQuantity?: number;
//   subCategory: string;
//   discount?: number;
//   sizeStock: TProductSizeStock[];
//   selectedSize?: string;
//   selectedColor?: string;
// };





// interfaces/IProduct.ts
import { Types } from "mongoose";

export interface IProduct {
  name: string;
  slug: string;
  photos: string[];
  description: string;
  metaKey?: string;
  price: number;
  discount: number;
  stockStatus: boolean;
  status: "active" | "inactive";
  categories: Array<{
    primary: Types.ObjectId;
    secondary?: Types.ObjectId;
    tertiary?: Types.ObjectId;
  }>;
  variants: Types.ObjectId[];
}
