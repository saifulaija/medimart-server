import httpStatus from 'http-status';

import AppError from '../../errors/AppError';
import { ISecondaryCategory } from './secondary.interface';
import { SecondaryCategory } from './secondary.model';

const createSecondaryCategory = async (payload: ISecondaryCategory) => {
  // Check if category already exists
  const existingCategory = await SecondaryCategory.findOne({
    slug: payload.slug,
  });
  if (existingCategory) {
    throw new AppError(httpStatus.BAD_REQUEST, 'This category already exists');
  }

  // Create and return the new category
  return await SecondaryCategory.create(payload);
};

const getAllSecondaryCategories = async () => {
  return await SecondaryCategory.find();
};

const getSecondaryCategoryById = async (id: string) => {
  return await SecondaryCategory.findById(id);
};

const updateSecondaryCategory = async (
  id: string,
  payload: Partial<ISecondaryCategory>,
) => {
  return await SecondaryCategory.findByIdAndUpdate(id, payload, { new: true });
};

const deleteSecondaryCategory = async (id: string) => {
  return await SecondaryCategory.findByIdAndDelete(id);
};

export const SecondaryCategoryService = {
  createSecondaryCategory,
  getAllSecondaryCategories,
  getSecondaryCategoryById,
  updateSecondaryCategory,
  deleteSecondaryCategory,
};
