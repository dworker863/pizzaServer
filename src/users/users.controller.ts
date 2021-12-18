import { IUser } from './users.interface';
import { UsersService } from './users.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() userDto: CreateUserDto): Promise<IUser> {
    return this.usersService.createUser(userDto);
  }

  @Get()
  async findAll(): Promise<IUser[]> {
    return this.usersService.getAllUsers();
  }
}
