import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('vehicles')
export class VehiclesController {
    @Get()
    findAll(): string {
        return 'This action returns all vehicles';
    }

    @Get('/:id')
    findOne(@Param('id') id: string): string {
        return `This action returns a #${id} vehicle`;
    }

    @Post()
    create(): string {
        return 'This action adds a new vehicle';
    }

    @Put('/:id')
    update(@Param('id') id: string): string {
        return `This action updates a #${id} vehicle`;
    }

    @Delete('/:id')
    remove(@Param('id') id: string): string {
        return `This action removes a #${id} vehicle`;
    }
}
