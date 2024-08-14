

import httpStatus from 'http-status';
import { IPrimaryCategory } from './primary.interface';
import { PrimaryCategory } from './primary.model';
import AppError from '../../errors/AppError';

const createPrimaryCategory = async (payload: IPrimaryCategory) => {
  // Check if category already exists
  const existingCategory = await PrimaryCategory.findOne({
    slug: payload.slug,
  });
  if (existingCategory) {
    throw new AppError(httpStatus.BAD_REQUEST, 'This category already exists');
  }

  // Create and return the new category
  return await PrimaryCategory.create(payload);
};

const getAllPrimaryCategories = async () => {
  return await PrimaryCategory.find();
};

const getPrimaryCategoryById = async (id: string) => {
  return await PrimaryCategory.findById(id);
};

const updatePrimaryCategory = async (
  id: string,
  payload: Partial<IPrimaryCategory>,
) => {
  return await PrimaryCategory.findByIdAndUpdate(id, payload, { new: true });
};

const deletePrimaryCategory = async (id: string) => {
  return await PrimaryCategory.findByIdAndDelete(id);
};

export const PrimaryCategoryService = {
  createPrimaryCategory,
  getAllPrimaryCategories,
  getPrimaryCategoryById,
  updatePrimaryCategory,
  deletePrimaryCategory,
};
