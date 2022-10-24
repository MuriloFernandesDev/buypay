import React, { useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { faPix } from '@fortawesome/free-brands-svg-icons'
import { faWallet, faStore, faLink } from '@fortawesome/free-solid-svg-icons'
import CircleOption from '../components/CircleOption'
import Transaction from '../components/Transaction'
import Container from '../components/Container'

export default function Home() {
  const [openDrawer, setOpenDrawer] = useState(false)

  const toggleDrawer = () => {
    setOpenDrawer((prevState) => !prevState)
  }

  return (
    <>
      <div className="bg-primary">
        <div className="relative pb-14">
          <Header toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
          <div className="flex mt-4 flex-row justify-between text-primary-content p-4 items-center h-12 bg-primary-content/25 rounded-3xl mx-6">
            <span className="font-medium text-xs">Saldo disponível</span>
            <span className="text-lg font-medium">R$ 551.462.568,59</span>
            <FontAwesomeIcon icon={faEyeSlash} className="w-6 h-6" />
          </div>
          <div className="flex justify-between w-full items-center px-6 mt-7">
            <CircleOption icon={faLink} title={'Criar cobrança'} />
            <CircleOption icon={faPix} title={'Pix'} />
            <CircleOption icon={faWallet} title={'Meu dinheiro'} />
            <CircleOption icon={faStore} title={'Clientes'} />
          </div>
        </div>
        {/* className="bg-primary-content w-full rounded-t-3xl absolute -mt-6 p-5" */}
        <Container title="Últimas movimentações" home={true}>
          <>
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
          </>
        </Container>
      </div>
    </>
  )
}
