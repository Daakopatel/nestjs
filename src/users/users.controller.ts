
import { Controller, Get, Query, Post, Body, Put, Param, Delete, HttpException, HttpStatus, UseFilters } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto, ListAllEntities } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { Users } from 'src/users/interfaces/user.interface';
import { HttpExceptionFilter } from 'src/common/exception/http-exception.filter';
import { ForbiddenException } from 'src/common/exception/forbidden.exception';

@Controller('users')
@UseFilters(new HttpExceptionFilter())

export class UsersController {

    constructor(private usersService: UsersService) { }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        try {
            return this.usersService.create(createUserDto)
        } catch (error) {
            throw new ForbiddenException();
        }
    }


    @Get()
    async findAll() {
        try {
            return this.usersService.findAll()
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'This is a custom message',
            }, HttpStatus.FORBIDDEN, {
                cause: error
            });
        }
    }


    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} user`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() UpdateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} user`;
    }
}
