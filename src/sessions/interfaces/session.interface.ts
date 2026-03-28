export enum SessionStatus {
  SCHEDULED = 'SCHEDULED',
  ONGOING = 'ONGOING',
  FINISHED = 'FINISHED',
  CANCELLED = 'CANCELLED',
}

export enum AudioType {
  DUBBED = 'DUBBED',
  SUBTITLED = 'SUBTITLED',
  ORIGINAL = 'ORIGINAL',
}

export enum ScreeningFormat {
  TWO_D = '2D',
  THREE_D = '3D',
  IMAX = 'IMAX',
  FOUR_DX = '4DX',
}

export interface Session {
  id: string;
  movieId: string; // FK → Movie
  roomId: string; // FK → Room
  startTime: Date;
  endTime: Date; // auto-calculated: startTime + movie.duration
  audioType: AudioType;
  format: ScreeningFormat;
  status: SessionStatus;
  basePrice: number; // in cents — avoids float precision issues
  totalSeats: number; // snapshot from Room at creation time
  availableSeats: number; // decremented on each booking
  createdAt: Date;
  updatedAt: Date;
}
