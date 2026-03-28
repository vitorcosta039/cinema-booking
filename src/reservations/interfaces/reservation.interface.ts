export enum ReservationStatus {
  PENDING = 'PENDING', // in cart, not yet confirmed
  CONFIRMED = 'CONFIRMED', // payment approved
  CANCELLED = 'CANCELLED', // cancelled by user or system
  EXPIRED = 'EXPIRED', // cart TTL reached without confirmation
}

export enum PaymentStatus {
  UNPAID = 'UNPAID',
  PAID = 'PAID',
  REFUNDED = 'REFUNDED',
  FAILED = 'FAILED',
}

export interface ReservationSeat {
  id: string;
  reservationId: string; // FK → Reservation
  seatId: string; // FK → Seat
  sessionId: string; // FK → Session
  price: number; // in cents — snapshot at booking time
}

export interface Reservation {
  id: string;
  userId: string; // FK → User
  sessionId: string; // FK → Session
  status: ReservationStatus;
  paymentStatus: PaymentStatus;
  seats: ReservationSeat[]; // one reservation can have multiple seats
  totalAmount: number; // in cents — sum of all seats prices
  expiresAt: Date; // TTL: createdAt + 10 minutes (cart expiration)
  confirmedAt?: Date; // set when status changes to CONFIRMED
  cancelledAt?: Date; // set when status changes to CANCELLED
  createdAt: Date;
  updatedAt: Date;
}
