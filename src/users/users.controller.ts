
import { Controller, Get, Query, Post, Body, Put, Param, Delete, HttpException, HttpStatus, UseFilters, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto, ListAllEntities } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { Users } from 'src/users/interfaces/user.interface';
import { ForbiddenException } from 'src/common/exception/forbidden.exception';
import { Roles } from '../common/decorators/roles.decorator';
import { LoggingInterceptor } from 'src/common/interceptor/logging.interceptor';

@Controller('users')
// @UseInterceptors(LoggingInterceptor)
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
    @Roles(['Admin'])
    findOne(@Param('id', ParseIntPipe) id: number) {
        console.log(id);
        
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
