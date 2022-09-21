import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Attend {
  @Prop()
  id: number;

  @Prop()
  userId: number;

  @Prop()
  attendTime: Date;

  @Prop()
  memo: string;
}

export type AttendDocument = Attend & Document;
export const AttendSchema = SchemaFactory.createForClass(Attend);
