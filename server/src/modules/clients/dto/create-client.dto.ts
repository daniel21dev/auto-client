import { OmitType } from '@nestjs/swagger';
import { ClientDto } from './client.dto';

export class CreateClientDto extends OmitType(ClientDto, ['id']) {}
