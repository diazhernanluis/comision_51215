import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private usersModel: Model <UserDocument>) {}

  create(createUserDto: CreateUserDto) {
    return this.usersModel.create(createUserDto);
  }

  findAll() {
    return this.usersModel.find();
  }

  findOne(id: number) {
    return this.usersModel.findById(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersModel.updateOne({_id: id, $set: {updateUserDto}});
  }

  remove(id: number) {
    return this.usersModel.deleteOne({_id: id});
  }
}
