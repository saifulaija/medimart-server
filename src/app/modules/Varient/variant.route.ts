import express from 'express';
import { VariantController } from './variant.controller';


const router = express.Router();

router.post('/', VariantController.createVariant);
router.get('/', VariantController.getAllVariants);
router.get('/:id', VariantController.getVariantById);
router.put('/:id', VariantController.updateVariant);
router.delete('/:id', VariantController.deleteVariant);

export const VariantRoutes=  router;
