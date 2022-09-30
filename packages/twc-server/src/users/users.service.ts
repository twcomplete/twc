import { Injectable } from '@nestjs/common';
import { User } from '@twc/twc-models';

@Injectable()
export class UsersService {
  async getUser(_id: number): Promise<User> {
    throw new Error('Method not implemented.');
  }
  getUsers(): string {
    return 'getUsers';
  }

  async createUser(input: User) {
    console.log(input);

    await this.checkUserExists(input._id)

    await this.saveUser(input, '');

    return 'saved';
  }

  private checkUserExists(_id: number) {
    return false; // TODO: 추후 구현
  }

  private saveUser(input: User, signupVerifyToken: string) {
    return; // TODO: 추후 구현
  }

}
