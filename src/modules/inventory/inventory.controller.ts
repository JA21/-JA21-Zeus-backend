import { Body, Controller, Get, HttpStatus, Param, Post, Put, Res, NotFoundException, Delete, Query } from '@nestjs/common';

import { InventoryService } from './inventory.service'
import { CreateInvetoryDto } from './dto/inventory_dto.dto'

@Controller('inventory')
export class InventoryController {

  constructor(private iventoryService: InventoryService) { }

  @Get('/')
  async AllInvetory(@Res() res) {
    const respond = await this.iventoryService.getInventory();
    return res.status(HttpStatus.OK).json({
      respond
    });
  }

  @Post('/create')
  async createInventory(@Res() res, @Body() body: CreateInvetoryDto) {
    const respond = await this.iventoryService.createInventory(body);
    return res.status(HttpStatus.OK).json({
      message: 'Inventory succesfully created',
      respond
    });
  }

  @Get('/:id')
  async getInventoryById(@Res() res, @Param('id') id: string) {
    const respond = await this.iventoryService.getInventoryById(id);
    if (!respond) throw new NotFoundException('Iventory does not exists')
    return res.status(HttpStatus.OK).json(respond);
  }


  @Delete('/delete')//consulta
  async deleteIventory(@Res() res, @Query('id') id: string) {
    const respond = await this.iventoryService.deleteInventory(id);
    if (!respond) throw new NotFoundException('Iventory does not exists')
    return res.status(HttpStatus.OK).json({
      message: 'Inventory delete succesfully',
      respond
    })
  }


  @Put('/update')
  async updateIventory(@Res() res, @Body() body: CreateInvetoryDto, @Param('id') id: string) {
    const respond = await this.iventoryService.updateInvetory(id, body);
    return res.status(HttpStatus.OK).json({
      message: 'Inventory succesfully update',
      respond
    })

  }


}
