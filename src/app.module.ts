import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './cats.controller';
import { AdminController } from './admin.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, AdminController],
  providers: [AppService],
})
export class AppModule {}
