import { Schema, model, Document } from 'mongoose';
import { IVariant } from './variant.interface';


const variantSchema = new Schema<IVariant>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  },
  { timestamps: true },
);

export const Variant = model<IVariant>('Variant', variantSchema);
