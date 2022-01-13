import { Controller, Get, Res } from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/user_dto.dto';

@Controller('user')
export class UserController {

  constructor(private userService: UserService) { }

  @Get('/')
  async allUser(@Res() res) {
    const respond = await this.userService.getAllUser();
    return respond;
  }
}
