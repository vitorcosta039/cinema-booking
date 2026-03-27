import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import type { Reservation } from '@/@types/Reservations';

const reservations: Reservation[] = [
  {
    id: 1,
    seat: 'A1',
    movieName: 'American Beauty',
    client: 'José Vitor',
    createdAt: new Date(),
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
      throw new NotFoundException('Reservation not found');
    }

    return reservation;
  }

  @Post()
  create(@Body() reservation: Reservation) {
    const { client, movieName, seat } = reservation;

    if (!client) {
      throw new BadRequestException('Client is required');
    }

    if (!movieName) {
      throw new BadRequestException('Movie name is required');
    }

    if (!seat) {
      throw new BadRequestException('Seat is required');
    }

    reservations.push({
      id: reservations[reservations.length - 1].id + 1,
      seat,
      client,
      movieName,
      createdAt: new Date(),
    });

    return {
      message: 'Reservation created',
      status: 'success',
    };
  }
}
