export enum AgeRating {
  FREE = 'FREE',
  TEN = '10',
  TWELVE = '12',
  FOURTEEN = '14',
  SIXTEEN = '16',
  EIGHTEEN = '18',
}

export enum MovieStatus {
  ANNOUNCED = 'ANNOUNCED',
  COMING_SOON = 'COMING_SOON',
  NOW_PLAYING = 'NOW_PLAYING',
  ENDED = 'ENDED',
}

export interface Movie {
  id: string;
  title: string;
  originalTitle?: string;
  slug: string;
  synopsis: string;
  duration: number; // in minutes
  releaseDate: Date;
  rating: AgeRating;
  genres: string[];
  language: string;
  subtitled?: boolean;
  status: MovieStatus;
  featured?: boolean;
  posterUrl?: string;
  trailerUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
