import { faQrcode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-daisyui'
import Container from '../../components/Container'

export default function Voucher() {
  return (
    <Container bgColor="bg-[#F9F9F9]" title="Criar cobrança">
      <React.Fragment>
        <div className="card bg-primary-content ">
          <div className="card-body px-4">
            <div className="flex flex-col gap-3 text-primary">
              <div className="flex flex-col">
                <span className="text-xs">ID da cobrança</span>
                <span className="text-sm font-medium opacity-50">
                  94685372BG
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs">Cliente</span>
                <span className="text-sm font-medium opacity-50">
                  Erick Monteiro{' '}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs">Descrição da cobrança</span>
                <span className="text-sm font-medium opacity-50">
                  Pacote 1234
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs">Valor</span>
                <span className="text-sm font-medium opacity-50">
                  R$3.430,00
                </span>
              </div>
              <div className="flex w-full gap-2">
                <div className="flex flex-col w-1/2">
                  <span className="text-xs">Vencimento</span>
                  <span className="text-sm font-medium opacity-50">
                    12/12/2023
                  </span>
                </div>
                <div className="flex flex-col w-1/2">
                  <span className="text-xs">Data de criação</span>
                  <span className="text-sm font-medium opacity-50">
                    12/12/2022
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs">Forma de pagamento</span>
                <span className="text-sm font-medium opacity-50">À vista</span>
              </div>
              <div className="flex w-full justify-between gap-2">
                <div className="flex flex-col w-1/2">
                  <span className="text-xs">Multa após vencimento</span>
                  <span className="text-sm font-medium opacity-50">0,00 %</span>
                </div>
                <div className="flex flex-col w-1/2">
                  <span className="text-xs">Juros por atraso (ao mês)</span>
                  <span className="text-sm font-medium opacity-50">0,00 %</span>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end ml-4 mt-10">
              <div className="w-2/3 bg-primary text-primary-content text-sm flex items-center justify-center gap-2 rounded-l-2xl h-[3rem]">
                Gerar QR code
                <FontAwesomeIcon icon={faQrcode} className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
        <Button className="bg-primary w-full">Enviar cobrança</Button>
      </React.Fragment>
    </Container>
  )
}
