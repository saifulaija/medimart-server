import { Types } from 'mongoose';

export interface IVariant {
  name: string;
  price: number;
  product: Types.ObjectId;
}
