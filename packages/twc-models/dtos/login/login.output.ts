import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
export class LoginOutput {
    @ApiProperty({
        description: '액세스 토큰',
        example:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwd2QiOiIyMWNvbG9yIiwiaWQiOiJoYW5hIiwiaWF0IjoxNjYzNjc4NTQ1fQ.-h_5z12jnpypZ5S99iUqKBaXNVg6V4DIauOxWVWn_Ik',
    })
    @Expose()
    accessToken: string;
}
