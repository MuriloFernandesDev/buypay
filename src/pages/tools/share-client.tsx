import React from 'react'
import { ClientInfo } from '../components/ClientInfo'
import Container from '../components/Container'
import { Input } from '../components/InputElement'

export default function ClientMoneyIn() {
  return (
    <Container message="Quem você irá cobrar?" title="Criar cobrança">
      <React.Fragment>
        <Input
          type="text"
          label="Pesquisar clientes"
          placeholder="Procurar pelo nome"
        />
        <div className="mt-4">
          <ClientInfo />
          <ClientInfo />
          <ClientInfo />
          <ClientInfo />
          <ClientInfo />
        </div>
      </React.Fragment>
    </Container>
  )
}
