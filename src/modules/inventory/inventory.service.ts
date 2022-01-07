import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Iventory } from './interfaces/inventory.interface';
@Injectable()
export class InventoryService {
  constructor(@InjectModel('Inventory') private readonly inventoryModel: Model<Iventory>) { }

  async getInventory(): Promise<Iventory[]> {
    const inventory =await this.inventoryModel.find();
    return inventory;
  }

  createInventory() {

  }

  updateInvetory() {

  }

  deleteInventory() {

  }
}
