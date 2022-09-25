import { Connection } from 'mongoose';
import constraints from 'src/constraints';
import { AttendSchema } from '../lib/schemas/attend.schema';

export const attendsProviders = [
  {
    provide: constraints().models.attendModel,
    useFactory: (connection: Connection) =>
      connection.model('Attend', AttendSchema),
    inject: [constraints().CONNECTION],
  },
];
