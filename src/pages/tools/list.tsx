import React from 'react'
import { Divider, Button } from 'react-daisyui'
import Container from '../../components/Container'
import Transaction from '../../components/Transaction'

function List() {
  return (
    <Container message="Selecione o período" title="Extrato">
      <React.Fragment>
        <div className="flex flex-col gap-2 text-primary">
          <div className="flex w-full justify-between items-end">
            <p>De</p>
            <input
              className="rounded-2xl border-primary font-normal"
              type="date"
            />
          </div>
          <div className="flex w-full justify-between items-end">
            <p>Até</p>
            <input
              className="rounded-2xl border-primary font-normal"
              type="date"
            />
          </div>
        </div>
        <Divider />
        <Button className="uppercase bg-primary w-full">Gerar PDF</Button>
        <div className="w-full mt-6">
          <Transaction
            disabledDivider={true}
            name="Cobrança recebida - 94685372 BG Servicos médicos e compa..."
            date="29/08/22"
            value="542.942,60"
          />
          <Transaction
            name="Taxa cartão - 94685372 BG Servicos médicos e companhi..."
            date="29/08/22"
            value="10.832,60"
          />
          <Transaction
            name="Saque solicitado titular Viaja Milhas agência de viagens LTDA"
            date="29/08/22"
            value="542.942,60"
          />
          <Transaction
            name="Cobrança recebida - 94685372 BG Servicos médicos e compa..."
            date="29/08/22"
            value="542.942,60"
          />
          <Transaction
            name="Cobrança recebida - 94685372 BG Servicos médicos e compa..."
            date="29/08/22"
            value="542.942,60"
          />
          <Transaction
            name="Cobrança recebida - 94685372 BG Servicos médicos e compa..."
            date="29/08/22"
            value="542.942,60"
          />
          <Transaction
            name="Cobrança recebida - 94685372 BG Servicos médicos e compa..."
            date="29/08/22"
            value="542.942,60"
          />
        </div>
      </React.Fragment>
    </Container>
  )
}

export default List
