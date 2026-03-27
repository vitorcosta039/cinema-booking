import { Body, Controller, Get } from '@nestjs/common';
import type { Reservation } from '@/@types/Reservations';

const reservations: Reservation[] = [
  {
    id: 1,
    seat: 'A1',
    movieName: 'American Beauty',
    client: 'José Vitor',
  },
];

@Controller('reservations')
export class ReservationsController {
  @Get()
  findAll(): Reservation[] {
    return reservations;
  }
}
