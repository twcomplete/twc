import { AttendaceInformation } from './attendance-info.dto';
import { PickType } from '@nestjs/swagger';

export class AttendInfoInput extends PickType(AttendaceInformation, ['userId', 'memo'] as any) {}
