import express from 'express';
import { PrimaryCategoryController } from './primary.controller';


const router = express.Router();

router.post('/create-primary-category', PrimaryCategoryController.createPrimaryCategory);
router.get('/', PrimaryCategoryController.getAllPrimaryCategories);
router.get('/:id', PrimaryCategoryController.getPrimaryCategoryById);
router.put('/:id', PrimaryCategoryController.updatePrimaryCategory);
router.delete('/:id', PrimaryCategoryController.deletePrimaryCategory);

export const PrimaryCategoryRoutes = router;
