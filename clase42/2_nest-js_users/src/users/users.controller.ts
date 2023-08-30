import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    if(!createUserDto.first_name || !createUserDto.last_name || !createUserDto.email) {
      throw new HttpException('Invalid params', HttpStatus.BAD_REQUEST);
    }
    console.log(createUserDto);
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@Query() query) {
    const { limit } = query;
    console.log("limit: ", limit);

    let users = this.usersService.findAll();
    if(limit) {
      users = users.slice(0, limit);
    }
    return {status: "Success", users};
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('id: ', id)
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
