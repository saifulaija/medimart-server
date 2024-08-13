// user.service.ts
import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { Category } from './category.model';
import { ICategory } from './category.interface';

const createCategoryIntoDB = async (payload: ICategory) => {
  console.log(payload);

  // Check if category already exists
  const isExistCategory = await Category.findOne({
    categoryName: payload.categoryName,
  });

  if (isExistCategory) {
    throw new AppError(httpStatus.BAD_REQUEST, 'This category already exists');
  }

  // Create a new category

  const result = await Category.create(payload);

  return result;
};

const getAllCategory = async () => {
  const result = await Category.find();

  return result;
};

export const CategoryServices = {
  createCategoryIntoDB,
  getAllCategory,
};
