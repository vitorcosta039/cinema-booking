// src/users/users.service.ts
import { randomUUID } from 'crypto';
import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { User, UserRole } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private users: User[] = [];

  async create(dto: CreateUserDto): Promise<UserResponseDto> {
    const exists = this.users.find((u) => u.email === dto.email);

    if (exists) {
      throw new ConflictException(
        'Unable to process your request. Please contact our support team.',
      );
    }

    const passwordHash = await bcrypt.hash(dto.password, 10);

    const user: User = {
      id: randomUUID(),
      name: dto.name,
      email: dto.email.toLowerCase().trim(),
      passwordHash,
      role: dto.role ?? UserRole.CUSTOMER,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.users.push(user);
    return new UserResponseDto(user);
  }

  async findById(id: string): Promise<UserResponseDto> {
    const user = this.users.find((u) => u.id === id);
    if (!user) throw new NotFoundException('User not found');
    return new UserResponseDto(user);
  }

  async findAll(): Promise<UserResponseDto[]> {
    return this.users.map((u) => new UserResponseDto(u));
  }
}
