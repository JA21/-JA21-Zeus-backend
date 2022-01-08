import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import {CommonModule} from './modules/@common/common.module'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryModule } from './modules/inventory/inventory.module';
@Module({
  imports: [CommonModule,
    MongooseModule.forRoot('mongodb://localhost/proejct-zeus',{
    useNewUrlParser:true
  }),InventoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
