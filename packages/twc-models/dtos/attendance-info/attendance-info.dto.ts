import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
export class AttendaceInformation {
    @ApiProperty({
        description: '출석아이디',
        example: '1234',
    })
    @Expose()
    id: number;
    @ApiProperty({
        description: '유저 아이디',
        example: '348293',
        required: true,
    })
    @Expose()
    userId: number;
    @ApiProperty({
        description: '출석일자',
    })
    attendTime: Date;
    @ApiProperty({
        description: '메모',
    })
    @Expose()
    memo: string;
}
