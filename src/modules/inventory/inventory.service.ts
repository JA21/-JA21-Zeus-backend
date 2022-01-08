import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Iventory } from './interfaces/inventory.interface';
import { CreateInvetoryDto } from './dto/inventory_dto.dto';

@Injectable()
export class InventoryService {
  constructor(@InjectModel('Inventory') private readonly inventoryModel: Model<Iventory>) { }

  async getInventory(): Promise<Iventory[]> {
    const inventory = await this.inventoryModel.find();
    return inventory;
  }

  async getInventoryById(id: string): Promise<Iventory> {
    const iventory = await this.inventoryModel.findById(id);
    return iventory;
  }

  async createInventory(createInventoryDto: CreateInvetoryDto): Promise<Iventory> {
    const iventory = new this.inventoryModel(createInventoryDto);
    return await iventory.save();
  }

  async updateInvetory(id:string, createProductDto):Promise<Iventory> {
    const iventory= await this.inventoryModel.findByIdAndUpdate(id,createProductDto,
      {new:true});
    return iventory;
  }

  async deleteInventory(id: string): Promise<Iventory> {
    const inventory = await this.inventoryModel.findByIdAndDelete(id);
    return inventory;
  }
}
