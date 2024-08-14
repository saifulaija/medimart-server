import express from 'express';
import { TertiaryCategoryController } from './tertiary.controller';


const router = express.Router();

router.post(
  '/create-Tertiary-category',
  TertiaryCategoryController.createTertiaryCategory,
);
router.get('/', TertiaryCategoryController.getAllTertiaryCategories);
router.get('/:id', TertiaryCategoryController.getTertiaryCategoryById);
router.put('/:id', TertiaryCategoryController.updateTertiaryCategory);
router.delete('/:id', TertiaryCategoryController.deleteTertiaryCategory);

export const TertiaryCategoryRoutes = router;
