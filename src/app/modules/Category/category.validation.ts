import { z } from 'zod';

const createCategoryValidationSchema = z.object({
  body: z.object({
    categoryName: z.string({
      invalid_type_error: 'Category name must be string',
    }),
    image: z.string({
      invalid_type_error: 'Image must be string',
    }),
    isDeleted: z.boolean().optional(),
  }),
});

export const CategoryValidation = {
  createCategoryValidationSchema,
};
