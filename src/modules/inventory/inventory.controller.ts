import { Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';

@Controller('inventory')
export class InventoryController {

  @Get()
  async AllInvetory(){
    return "inventario";
  }

  @Post('/create')
  async createInventory(@Res() res){
    return res.status(HttpStatus.OK).json({
      message:'recived'
    });
  }
  
}
