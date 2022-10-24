import React from 'react'
import { Button } from 'react-daisyui'
import Container from '../../components/Container'
import { Input } from '../../components/InputElement'

function Create() {
  return (
    <Container
      message="Forma de pagamento de seu cliente"
      title="Criar cobrança"
    >
      <React.Fragment>
        <div className="flex flex-col w-full gap-3">
          <div className="form-control bg-accent/50 rounded-xl p-2">
            <label className="label justify-start gap-3 cursor-pointer">
              <input type="radio" name="radio-1" className="checkbox" />
              <span className="label-text text-base">Boleto bancário/PIX</span>
            </label>
          </div>
          <div className="form-control bg-accent/50 rounded-xl p-2">
            <label className="label justify-start gap-3 cursor-pointer">
              <input type="radio" name="radio-1" className="checkbox" />
              <span className="label-text text-base">Cartão de crédito</span>
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <Input type="text" label="Valor da cobraça" placeholder="R$ 0,00" />
          <Input
            type="text"
            label="Condições de pagamento"
            placeholder="À vista"
          />
          <Input type="text" label="Vencimento" placeholder="15/05/2023" />
          <Input type="text" label="Descrição" placeholder="Descrição" />
          <div className="flex gap-4">
            <Input
              type="text"
              label="Multa após vencimento"
              placeholder="0,00"
            />
            <Input
              type="text"
              label="Juros por atraso (ao mês)"
              placeholder="0,00"
            />
          </div>
          <Button className="bg-primary mt-4">Próximo</Button>
        </div>
      </React.Fragment>
    </Container>
  )
}

export default Create
