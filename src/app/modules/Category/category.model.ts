/* eslint-disable @typescript-eslint/no-this-alias */

import { Schema, model } from 'mongoose';

import { ICategory } from './category.interface';

const categorySchema = new Schema<ICategory>(
  {
    categoryName: {
      type: String,
    },

    image: {
      type: String,
      required: true,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

categorySchema.statics.isCategoryExistsByEmail = async function (
  categoryName: string,
) {
  return await Category.findOne({ categoryName });
};

export const Category = model<ICategory>('Category', categorySchema);
