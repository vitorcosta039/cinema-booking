// src/rooms/interfaces/seat.interface.ts

export enum SeatType {
  STANDARD = 'STANDARD',
  VIP = 'VIP',
  COUPLE = 'COUPLE',
  ACCESSIBLE = 'ACCESSIBLE',
}

export enum SeatStatus {
  AVAILABLE = 'AVAILABLE',
  RESERVED = 'RESERVED',
  OCCUPIED = 'OCCUPIED',
  BLOCKED = 'BLOCKED',
}

export interface Seat {
  id: string;
  roomId: string; // FK → Room
  label: string; // auto-generated: "A1", "B12"
  row: string; // "A", "B", "C"...
  column: number; // 1, 2, 3...
  type: SeatType;
  status: SeatStatus;
  isAccessible: boolean;
}
