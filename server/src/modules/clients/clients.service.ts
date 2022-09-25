import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

let clients: Client[] = [
  {
    id: 1,
    name: 'daniel',
    dob: new Date('03-02-1999'),
  },
  {
    id: 2,
    name: 'daniel2',
    dob: new Date('03-02-1999'),
  },
];

@Injectable()
export class ClientsService {
  create(createClientDto: CreateClientDto) {
    const newClient = { ...createClientDto, id: clients.length };
    clients.push(newClient);
    return newClient;
  }

  findAll() {
    return clients;
  }

  findOne(id: number) {
    return clients.find((c) => c.id === id);
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    const clientUpdated = {
      id,
      ...updateClientDto,
    };
    clients = clients.map((c) => {
      if (c.id === id) {
        return { ...c, ...clientUpdated };
      }
      return c;
    });
    return clientUpdated;
  }

  remove(id: number) {
    const client = clients.find((c) => c.id === id);
    clients = clients.filter((c) => c.id !== id);
    return client;
  }
}
