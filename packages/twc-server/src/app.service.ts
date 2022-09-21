import { Injectable } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
@Injectable()
export class AppService {
  healthCheck(): string {
    return 'Hello World! I am healthy';
  }
}
