import React, { useState } from 'react';
import { CreateClientDto } from './apiClient/Api';
import './App.css';
import { useClients } from './hooks/useClients';

function App() {
  const [client, setClient] = useState<CreateClientDto>({ name: '', dob: '' });
  const { clients, saveClient, deleteClient } = useClients(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await saveClient(client);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          value={client.name}
          onChange={(e) => setClient({ ...client, name: e.target.value })}
        />
        <input
          type="date"
          name="name"
          id="name"
          value={client.dob}
          onChange={(e) => setClient({ ...client, dob: e.target.value })}
        />
        <button type="submit">create</button>
      </form>
      <ul style={{ width: 300, margin: 'auto' }}>
        {clients.map((c) => (
          <li key={crypto.randomUUID()}>
            <p>
              {c.id} - {c.name} - {new Date(c.dob).toLocaleDateString()}
              <button onClick={() => deleteClient(c.id + '')}>delete</button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
