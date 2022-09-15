import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers(): string {
    return 'getUsers';
  }

  save(input) {
    return 'saved';
  }
}
