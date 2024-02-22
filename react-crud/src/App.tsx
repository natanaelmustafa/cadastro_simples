import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Main from './components/Main';
import Button from './components/Button';
import Form from './components/Form';
import Table from './components/Table';
import Client from './core/Client';

function App() {

  const baseUrl = 'http://localhost:3001/clients'
  const [client, setClient] = useState<Client>(Client.vazio())
  const [clients, setClients] = useState<Client[]>()
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  useEffect(obterTodos, [])

  function obterTodos(){
    axios(baseUrl).then(resp =>{
      setClients(resp.data)
    })
  }

  function selectedClient(client: Client){
    setClient(client)
    setVisible('form')
  }

  function newClient(){
    setClient(Client.vazio())
    setVisible('form')
  }

 /*  async function save(client: Client) {
    const method = client.id ? 'put' : 'post'
    const url = client.id ? `${baseUrl}/${client.id}` : baseUrl
    try {
        const resposta = await axios.post(url, { client });
        console.log('Pedido PUT bem-sucedido:', resposta.data);
    } catch (erro) {
        console.error('Erro ao fazer o pedido PUT:', erro);
    }
} */

  function save(client: Client){ 
    const user ={
      name: client.name,
      age: client.age
    }   
    const method = client.id ? 'put' : 'post'
    const url = client.id ? `${baseUrl}/${client.id}` : baseUrl
    axios[method](url, user)
      .then(resp =>{
          const clients = getUpdatedClients(resp.data)
          setClients(clients)
        })
    setVisible('table')
  }

  function getUpdatedClients(client: Client, add = true){
    const list = clients?.filter(u => u.id !== client.id)
    if(add) list?.unshift(client)
    return list
  }

  function remove(client: Client){
    axios.delete(`${baseUrl}/${client.id}`).then(resp =>{
      const clients = getUpdatedClients(resp.data, false)
      setClients(clients)
    })
  }
  return (
    <div className="App">
        <Main title='Cadastro Simples'>
          {visible === 'table' ? (
            <>
              <div className='d-flex justify-content-end mb-3'>
                <Button color='green' onClick={newClient}>Novo Cliente</Button>
              </div>
              <Table clients={clients} selectedClient={selectedClient} DeletedClient={remove}></Table>
            </>
          ): (
               <Form canceled={() => setVisible('table')} client={client} saveClient={save}></Form> 
          )}
        </Main>
    </div>
  );
}

export default App;
