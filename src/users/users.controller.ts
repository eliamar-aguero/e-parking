import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll(): string {
        return 'This action returns all users';
    }

    @Get('/:id')
    findOne(@Param('id') id: string): string {
        return `This action returns a #${id} user`;
    }

    @Post()
    create(): string {
        return 'This action adds a new user';
    }

    @Put('/:id')
    update(@Param('id') id: string): string {
        return `This action updates a #${id} user`;
    }

    @Delete('/:id')
    remove(@Param('id') id: string): string {
        return `This action removes a #${id} user`;
    }
}
