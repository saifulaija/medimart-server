import express from 'express';
import { SecondaryCategoryController } from './secondary.controller';


const router = express.Router();

router.post(
  '/create-Secondary-category',
  SecondaryCategoryController.createSecondaryCategory,
);
router.get('/', SecondaryCategoryController.getAllSecondaryCategories);
router.get('/:id', SecondaryCategoryController.getSecondaryCategoryById);
router.put('/:id', SecondaryCategoryController.updateSecondaryCategory);
router.delete('/:id', SecondaryCategoryController.deleteSecondaryCategory);

export const SecondaryCategoryRoutes = router;
