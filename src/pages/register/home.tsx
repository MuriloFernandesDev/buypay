import Image from 'next/image'
import Link from 'next/link'
import LogoImg from '../../assets/images/LogoPink.webp'

export default function Home() {
  return (
    <div className="min-h-screen max-w-md mx-auto">
      <div className="h-[30vh] flex justify-center items-start bg-primary-content">
        <div className="card-body justify-center items-center">
          <Image src={LogoImg} width={177} height={49} layout="fixed" />
        </div>
      </div>
      <div className="h-[70vh] px-4 flex bg-center bg-no-repeat bg-auto bg-[url('../../src/assets/images/Ellipse.webp')]">
        <div className="px-4 card-body justify-end text-primary-content">
          <h1 className="text-3xl">
            A oportunidade de aumentar o lucro de suas vendas
          </h1>
          <h2 className="text-base">
            Tenha acesso a preços imbatíveis de iPhones nacionais lacrados para
            revenda!
          </h2>
          <button className="btn btn-primary border-transparent bg-primary-content text-primary">
            Entrar
          </button>
          <Link href={'/register/name'}>
            <button className="btn btn-primary bg-transparent text-primary-content border-primary-content">
              Cadastrar
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
