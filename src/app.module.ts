import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservationsController } from './reservations/reservations.controller';
import { MoviesController } from './movies/movies.controller';
import { MoviesModule } from './movies/movies.module';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [MoviesModule, RoomsModule],
  controllers: [AppController, ReservationsController, MoviesController],
  providers: [AppService],
})
export class AppModule {}
