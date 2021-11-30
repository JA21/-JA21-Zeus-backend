import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';


import { MongooseConfigService } from './mongoose/moongose.service';


import app from './env/env.config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [app],
      envFilePath: process.cwd() + '/.env',
      isGlobal: true,
    }),
  
  ],
  providers: [
    
    MongooseConfigService,
  ],
  exports: [MongooseConfigService],
})
export class CommonModule { }