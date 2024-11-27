import { Controller, Get, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getList(@Req() req, @Res() res) {
    const list = await this.usersService.getList();
    return res.json({ list });
  }
}
