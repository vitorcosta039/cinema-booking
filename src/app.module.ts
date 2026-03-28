import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservationsController } from './reservations/reservations.controller';
import { MoviesController } from './movies/movies.controller';
import { MoviesModule } from './movies/movies.module';
import { RoomsModule } from './rooms/rooms.module';
import { SessionsModule } from './sessions/sessions.module';
import { ReservationsModule } from './reservations/reservations.module';

@Module({
  imports: [MoviesModule, RoomsModule, SessionsModule, ReservationsModule],
  controllers: [AppController, ReservationsController, MoviesController],
  providers: [AppService],
})
export class AppModule {}
