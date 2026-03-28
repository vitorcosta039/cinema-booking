// src/rooms/interfaces/room.interface.ts

export enum RoomType {
  STANDARD = 'STANDARD',
  VIP = 'VIP',
  IMAX = 'IMAX',
  FOUR_DX = 'FOUR_DX',
}

export enum RoomStatus {
  ACTIVE = 'ACTIVE',
  MAINTENANCE = 'MAINTENANCE',
  INACTIVE = 'INACTIVE',
}

export interface Room {
  id: string;
  name: string;
  number: number;
  totalSeats: number; // calculated: rows × columns
  rows: number;
  columns: number;
  type: RoomType;
  status: RoomStatus;
  hasAccessibility: boolean;
  has3D: boolean;
  hasDolby: boolean;
  createdAt: Date;
  updatedAt: Date;
}
