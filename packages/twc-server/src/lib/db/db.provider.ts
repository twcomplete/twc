import { Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import constraints from 'src/constraints';

export const DbProviders = [
  {
    provide: constraints().CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(constraints().mongoDB.hostUrl),
  },
];
