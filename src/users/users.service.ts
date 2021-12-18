import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IUser } from './users.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateUserDto): Promise<IUser> {
    const user = await this.userRepository.create(dto);
    return user;
  }

  async getAllUsers(): Promise<IUser[]> {
    const users = await this.userRepository.findAll();
    return users;
  }
}
