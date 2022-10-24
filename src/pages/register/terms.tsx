import Image from 'next/image'
import { ContainerRegister } from '../../components/ContainerRegister'
import { Input } from '../../components/InputElement'
import TermsImg from '../../assets/images/termsimg.png'

export default function terms() {
  return (
    <ContainerRegister
      title="Termos & Condições"
      titleButton="Finalizar"
      progress={90}
    >
      <div className="flex flex-col items-center text-start gap-8">
        <div className="w-[40%]">
          <Image src={TermsImg} layout="responsive"></Image>
        </div>
        <span>
          Ao finalizar, você aceita os Termos & Condições e Política de
          Privacidade
        </span>
      </div>
    </ContainerRegister>
  )
}
