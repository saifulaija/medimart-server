import {  z } from 'zod';

const colorStockSchema = z.object({
  color: z.string().min(1, 'Color cannot be empty'), // Ensure color is a non-empty string
  stock: z.number().int().nonnegative(), // Ensure stock is a non-negative integer
});

// Define the schema for product sizes with color stocks
const productSizeSchema = z.object({
  size: z.string().min(1, 'Size cannot be empty'), // Ensure size is a non-empty string
  colorStock: z
    .array(colorStockSchema)
    .nonempty('At least one color stock is required'), // Ensure it's an array with at least one color stock
});

const imagesSchema = z.array(z.string());
const tagsSchema=z.array(z.string())
const reviews=z.array(z.string()).optional();

// const TReviewSchemaSchema = z.object({
//   reviewId:z.string().optional()
// });

const CreateProductValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'name is required',
    }),
    model: z.string(),
    material: z.string(),
    category: z.string({
      required_error: 'Category is required',
    }),
    price: z.number({
      required_error: 'price is required',
    }),
    productCode: z.string().optional(),
    productType: z.string(),
    description: z.string({
      required_error: 'Description is required',
    }),
    images: imagesSchema,
    reviews: reviews,
    sellsQuantity: z.number().optional(),
    discount: z.number().optional(),
    isDeleted: z.boolean().optional(),
    tags:tagsSchema,
    sizeStock: z.array(productSizeSchema),
    selectedSize: z.string().optional(),
    subCategory: z.string(),
  }),
});

export const ProductValidations = {
  CreateProductValidationSchema,
};
// import {  z } from 'zod';

// const productSizeSchema = z.object({
//   size: z.string(),
//   colorStock: z.number(),
// });

// const imagesSchema = z.array(z.string());
// const reviews=z.array(z.string()).optional();

// // const TReviewSchemaSchema = z.object({
// //   reviewId:z.string().optional()
// // });

// const CreateProductValidationSchema = z.object({
//   body: z.object({
//     name: z.string({
//       required_error: 'name is required',
//     }),
//     model: z.string(),
//     material: z.string(),
//     category: z.string({
//       required_error: 'Category is required',
//     }),
//     price: z.number({
//       required_error: 'price is required',
//     }),
//     productCode: z.string().optional(),
//     productType: z.string(),
//     description: z.string({
//       required_error: 'Description is required',
//     }),
//     images: imagesSchema,
//     reviews: reviews,
//     sellsQuantity: z.number().optional(),
//     discount: z.number().optional(),
//     isDeleted: z.boolean().optional(),
//     tag: z.string().optional(),
//     sizeStock: z.array(productSizeSchema),
//     selectedSize: z.string().optional(),
//     subCategory: z.string(),
//   }),
// });

// export const ProductValidations = {
//   CreateProductValidationSchema,
// };
