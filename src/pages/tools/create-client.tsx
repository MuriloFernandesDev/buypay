import React from 'react'
import { Button } from 'react-daisyui'
import Container from '../components/Container'
import { Input } from '../components/InputElement'

export default function NewClient() {
  return (
    <Container title="Criar cobrança" message="Novo cliente">
      <React.Fragment>
        <div className="flex flex-col gap-4">
          <Input
            type="text"
            label="Nome completo"
            placeholder="João Lucas Pizzini da Silva"
          />
          <Input type="text" label="CPF" placeholder="123.213.123 - 21" />
          <Input type="text" label="Nascimento" placeholder="12/03/1989" />
          <Input type="text" label="Celular" placeholder="+551899829-8526" />
          <Input type="text" label="Email" placeholder="erick123@gmail.com" />
          <Input type="text" label="CEP" placeholder="16200-198" />
          <Input type="text" label="Rua" placeholder="Rua azul " />
          <Input type="text" label="Bairro" placeholder="Centro" />
          <Input type="text" label="Número" placeholder="2189" />
          <Input
            type="text"
            label="Cidade / Estado"
            placeholder="São Paulo - SP"
          />
          <Input
            type="text"
            label="Complemento"
            placeholder="Bloco 23 - AP 100"
          />
        </div>
        <Button className="bg-primary mt-4">Criar cobrança</Button>
      </React.Fragment>
    </Container>
  )
}
