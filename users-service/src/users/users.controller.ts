import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
    @MessagePattern({ cmd: 'get_user'})
    getUser(data: any) {
    console.log('request received in microservice');
    return {
      id: data.id,
      name: 'Abhishek',
      role: 'Developer',
    };
  }
}
