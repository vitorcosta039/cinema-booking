import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
} from '@nestjs/common';
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

  @Get(':id')
  findById(@Param('id') id: string): Reservation {
    const reservation = reservations.find(
      (reservation) => reservation.id === Number(id),
    );

    if (!reservation) {
      throw new NotFoundException({
        message: 'Reservation not found',
        status: 404,
      });
    }

    return reservation;
  }
}
