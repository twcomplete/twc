import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
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
        example: `- 랫풀다운 5셋트
        - 체스트 프레스 5셋트
        - 플라이 5셋트
        `,
    })
    @Expose()
    memo?: string;
}
