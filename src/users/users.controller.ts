import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getList() {
    const list = await this.usersService.getList();
    return {
      data: list,
      message: 'OK',
      statusCode: 400,
    };
  }
}
