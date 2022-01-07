import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { InventoryController } from './inventory.controller';
import {InventoryService} from './inventory.service';
import {IventorySchema} from './schema/iventory.schema';
@Module({
  imports:[MongooseModule.forFeature([
    {name:'Inventory',schema:IventorySchema}
  ])],
  controllers: [InventoryController],
  providers:[InventoryService]
})
export class InventoryModule {}
