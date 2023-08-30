import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users:Array<User>;

  constructor() {
    this.users = [];
  }

  create(createUserDto: CreateUserDto) {
    const newUser = new User(createUserDto);
    this.users.push(newUser);
    return newUser
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find( el => el.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const index = this.users.findIndex(el => el.id === id);
    this.users[index] = {...this.users[index], ...updateUserDto};
    return `#${id} updated`;
  }

  remove(id: number) {
    const index = this.users.findIndex(el => el.id === id);
    this.users.splice(index, 1);
    return `This action removes a #${id} user`;
  }
}
