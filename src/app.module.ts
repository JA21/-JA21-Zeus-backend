import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CommonModule } from './modules/@common/common.module';

import { MongooseConfigService } from './modules/@Common/mongoose/moongose.service';

@Module({
  imports: [
    CommonModule,
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
   //modules
  ]
})
export class AppModule { }