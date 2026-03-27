import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservationsController } from './reservations/reservations.controller';

@Module({
  imports: [],
  controllers: [AppController, ReservationsController],
  providers: [AppService],
})
export class AppModule {}
