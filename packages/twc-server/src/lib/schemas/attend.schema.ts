import * as mongoose from 'mongoose';

export const AttendSchema = new mongoose.Schema({
  id: Number,
  userId: Number,
  attendTime: Date,
  memo: String,
});
