import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import type { Reservation } from '@/reservations/interfaces/reservation.interface';

const reservations: Reservation[] = [
  {
    id: 1,
    seat: 'A1',
    movieName: 'American Beauty',
    client: 'José Vitor',
    createdAt: new Date(),
    updatedAt: new Date(),
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
      updatedAt: new Date(),
    });

    return {
      message: 'Reservation created',
      status: 'success',
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() reservation: Reservation) {
    const reservationToUpdate = reservations.find(
      (reservation) => reservation.id === Number(id),
    );

    if (!reservationToUpdate) {
      throw new NotFoundException('Reservation not found');
    }

    const { client, movieName, seat } = reservation;

    if (!client && !movieName && !seat) {
      throw new BadRequestException(
        'At least one field must be provided for update',
      );
    }

    const updatedMessages: string[] = [];

    if (client && reservationToUpdate.client !== client) {
      reservationToUpdate.client = client;
      updatedMessages.push('Client updated');
    }

    if (movieName && reservationToUpdate.movieName !== movieName) {
      reservationToUpdate.movieName = movieName;
      updatedMessages.push('Movie name updated');
    }

    if (seat && reservationToUpdate.seat !== seat) {
      reservationToUpdate.seat = seat;
      updatedMessages.push('Seat updated');
    }

    reservationToUpdate.updatedAt = new Date();

    if (updatedMessages.length === 0) {
      return {
        message:
          'No changes detected. The data provided is the same as the current record.',
        status: 200,
      };
    }

    return updatedMessages;
  }
}
