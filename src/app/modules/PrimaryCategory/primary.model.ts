import { Schema, model, Document } from 'mongoose';
import { IPrimaryCategory } from './primary.interface';


const primaryCategorySchema = new Schema<IPrimaryCategory>(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    thumbnail: { type: String, required: true },
  },
  { timestamps: true },
);

export const PrimaryCategory = model<IPrimaryCategory>(
  'PrimaryCategory',
  primaryCategorySchema,
);
