import { Schema, model, Document } from 'mongoose';
import { ISecondaryCategory } from './secondary.interface';


const secondaryCategorySchema = new Schema<ISecondaryCategory>(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    thumbnail: { type: String, required: true },
  },
  { timestamps: true },
);

export const SecondaryCategory = model<ISecondaryCategory>(
  'SecondaryCategory',
  secondaryCategorySchema,
);
