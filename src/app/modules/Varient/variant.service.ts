
import httpStatus from 'http-status';
import { IVariant } from './variant.interface';
import { Variant } from './variant.model';

const createVariant = async (payload: IVariant) => {
  // Create and return the new variant
  return await Variant.create(payload);
};

const getAllVariants = async () => {
  return await Variant.find().populate('product'); // Populate product details if needed
};

const getVariantById = async (id: string) => {
  return await Variant.findById(id).populate('product');
};

const updateVariant = async (id: string, payload: Partial<IVariant>) => {
  return await Variant.findByIdAndUpdate(id, payload, { new: true }).populate(
    'product',
  );
};

const deleteVariant = async (id: string) => {
  return await Variant.findByIdAndDelete(id);
};

export const VariantService = {
  createVariant,
  getAllVariants,
  getVariantById,
  updateVariant,
  deleteVariant,
};
