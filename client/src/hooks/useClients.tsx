import { useEffect, useState } from 'react';
import { Api } from '../apiClient/Api';
import { ClientDto, CreateClientDto, UpdateClientDto } from '../apiClient/data-contracts';

const client = new Api({
  baseUrl: 'http://localhost:3000',
});

export const useClients = (start: boolean) => {
  const [clients, setClients] = useState<ClientDto[]>([]);

  useEffect(() => {
    if (start) {
      getClients();
    }
  }, []);

  const getClients = async () => {
    const { data } = await client.clients.clientsControllerFindAll();
    setClients(data);
  };

  const saveClient = async (dto: CreateClientDto) => {
    const { data } = await client.clients.clientsControllerCreate(dto);
    setClients([...clients, data]);
  };

  const updateClient = async (id: string, dto: UpdateClientDto) => {
    const { data } = await client.clients.clientsControllerUpdate(id, dto);
    setClients([...clients, data]);
  };

  const deleteClient = async (id: string) => {
    await client.clients.clientsControllerRemove(id);
    setClients((c) => c.filter((c) => c.id !== +id));
  };

  return {
    clients,
    getClients,
    saveClient,
    updateClient,
    deleteClient,
  };
};
