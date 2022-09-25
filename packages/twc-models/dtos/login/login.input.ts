import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
export class LoginInput {
    @ApiProperty({
        description: '아이디',
        example: 'hana',
    })
    @Expose()
    id: string;

    @ApiProperty({
        description: '비밀번호',
        example: '21color',
    })
    @Expose()
    pwd: string;
}
