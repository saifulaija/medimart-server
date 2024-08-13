/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import { CategoryControllers } from './category.controller';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryValidation } from './category.validation';
const router = express.Router();
router.post(
  '/create-category',

  validateRequest(CategoryValidation.createCategoryValidationSchema),

  CategoryControllers.createCategory,
);

router.get('/', CategoryControllers.getAllCategory);



export const CategoryRoutes = router;
