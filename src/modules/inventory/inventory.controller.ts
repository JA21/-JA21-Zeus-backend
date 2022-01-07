import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';


import {CreateInvetoryDto} from './dto/inventory_dto.dto'
@Controller('inventory')
export class InventoryController {

  @Get()
  async AllInvetory() {
    return "inventario";
  }

  @Post('/create')
  async createInventory(@Res() res, @Body() body:CreateInvetoryDto) {
    console.log(body)
    return res.status(HttpStatus.OK).json({
      message: 'recived'
    });
  }

}
