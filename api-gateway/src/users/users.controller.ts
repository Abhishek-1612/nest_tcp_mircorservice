import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MICROSERVICES_CLIENTS } from 'src/constant';

@Controller('users')
export class UsersController {
    constructor(@Inject(MICROSERVICES_CLIENTS.USERS_SERVICE) private userService: ClientProxy){}

    @Get()
    getUser(){
        return this.userService.send({cmd: 'get_user'}, {id: 1});
    }
}
