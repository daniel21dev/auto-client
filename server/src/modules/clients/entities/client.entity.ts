import { IsDateString, IsString } from '@nestjs/class-validator';

export class Client {
  id: number;
  @IsString()
  name: string;
  @IsDateString()
  dob: Date;
}
