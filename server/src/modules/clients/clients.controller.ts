import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientDto } from './dto/client.dto';

@ApiTags('clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @ApiResponse({ type: ClientDto, status: 201 })
  @Post()
  async create(@Res() res: Response, @Body() createClientDto: CreateClientDto) {
    console.log({ createClientDto });
    const client = this.clientsService.create(createClientDto);
    res.send(client);
  }

  @ApiResponse({ type: ClientDto, status: 200, isArray: true })
  @Get()
  findAll() {
    return this.clientsService.findAll();
  }

  @ApiResponse({ type: ClientDto, status: 200 })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientsService.findOne(+id);
  }

  @ApiResponse({ type: ClientDto, status: 200 })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.update(+id, updateClientDto);
  }

  @ApiResponse({ type: ClientDto, status: 200 })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientsService.remove(+id);
  }
}
