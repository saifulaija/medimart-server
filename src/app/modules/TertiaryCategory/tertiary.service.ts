import httpStatus from 'http-status';

import AppError from '../../errors/AppError';
import { ITertiaryCategory } from './tertiary.interface';
import { TertiaryCategory } from './tertiary.model';


const createTertiaryCategory = async (payload: ITertiaryCategory) => {
  // Check if category already exists
  const existingCategory = await TertiaryCategory.findOne({
    slug: payload.slug,
  });
  if (existingCategory) {
    throw new AppError(httpStatus.BAD_REQUEST, 'This category already exists');
  }

  // Create and return the new category
  return await TertiaryCategory.create(payload);
};

const getAllTertiaryCategories = async () => {
  return await TertiaryCategory.find();
};

const getTertiaryCategoryById = async (id: string) => {
  return await TertiaryCategory.findById(id);
};

const updateTertiaryCategory = async (
  id: string,
  payload: Partial<ITertiaryCategory>,
) => {
  return await TertiaryCategory.findByIdAndUpdate(id, payload, { new: true });
};

const deleteTertiaryCategory = async (id: string) => {
  return await TertiaryCategory.findByIdAndDelete(id);
};

export const TertiaryCategoryService = {
  createTertiaryCategory,
  getAllTertiaryCategories,
  getTertiaryCategoryById,
  updateTertiaryCategory,
  deleteTertiaryCategory,
};
