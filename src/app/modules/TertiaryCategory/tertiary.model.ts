import { Schema, model, Document } from 'mongoose';
import { ITertiaryCategory } from './tertiary.interface';


const TertiaryCategorySchema = new Schema<ITertiaryCategory>(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    thumbnail: { type: String, required: true },
  },
  { timestamps: true },
);

export const TertiaryCategory = model<ITertiaryCategory>(
  'TertiaryCategory',
  TertiaryCategorySchema,
);
