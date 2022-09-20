import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { AttendaceInformation, AttendInfoInput } from '@twc/twc-models';
import constraints from 'src/constraints';
import { Attend } from 'src/lib/interfaces/attend.interface';

@Injectable()
export class AttendService {
  constructor(
    @Inject(constraints().models.attendModel)
    private readonly attendModel: Model<Attend>,
  ) {}

  async create(input: AttendaceInformation): Promise<Attend> {
    const attend = new this.attendModel(input);
    return attend.save();
  }

  async findAll(): Promise<Attend[]> {
    return this.attendModel.find().exec();
  }
}
