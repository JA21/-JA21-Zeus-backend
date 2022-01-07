import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryModule } from './modules/inventory/inventory.module';
import {MongooseModule} from '@nestjs/mongoose';
@Module({
  imports: [InventoryModule,
    MongooseModule.forRoot('mongodb://localhost/proejct-zeus',{
    useNewUrlParser:true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
