import {
  faArrowUpFromBracket,
  faDownload,
  faPaste,
  faQrcode,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-daisyui'
import Container from '../../components/Container'
import QrCodeImg from '../../assets/images/qrcode.png'
import viajaImg from '../../assets/images/viaja.svg'
import Image from 'next/image'

export default function Share() {
  return (
    <Container bgColor="bg-[#F9F9F9]" title="Criar cobrança">
      <React.Fragment>
        <div className="card bg-primary-content ">
          <div className="card-body px-4">
            <div className="flex flex-col">
              <Image src={QrCodeImg} layout="responsive" />
              <div className="mx-auto flex flex-col items-center mt-6">
                <div className="rounded-full h-12 w-12 flex justify-center items-center bg-primary-content shadow-black shadow-sm">
                  <Image src={viajaImg} layout="fixed" />
                </div>
                <p className="font-semibold text-base">Viaja milhas</p>
              </div>
            </div>
            <div className="divider" />
            <div className="grid grid-cols-3 gap-3 mx-auto">
              <div className="flex   flex-col items-center text-primary/50">
                <FontAwesomeIcon
                  icon={faArrowUpFromBracket}
                  className="w-7 h-7 btn p-0 bg-transparent text-primary/50 border-none"
                />
                <span className="text-xs">Compartilhar</span>
              </div>
              <div className="flex flex-col items-center text-primary/50">
                <FontAwesomeIcon
                  icon={faDownload}
                  className="w-7 h-7 btn p-0 bg-transparent text-primary/50 border-none"
                />
                <span className="text-xs">Salvar</span>
              </div>
              <div className="flex   flex-col items-center text-primary/50">
                <FontAwesomeIcon
                  icon={faPaste}
                  className="w-7 h-7 btn p-0 bg-transparent text-primary/50 border-none"
                />
                <span className="text-xs">Copiar link</span>
              </div>
            </div>
          </div>
        </div>
        <Button className="bg-primary w-full">Enviar cobrança</Button>
      </React.Fragment>
    </Container>
  )
}
