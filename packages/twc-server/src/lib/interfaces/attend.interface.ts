import { Document } from 'mongoose';

export interface Attend extends Document {
  readonly id: number;
  readonly userId: number;
  readonly attendTime: Date;
  readonly memo: string;
}
