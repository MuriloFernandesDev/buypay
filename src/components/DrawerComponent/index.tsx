import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import {
  faArrowRightFromBracket,
  faReceipt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Divider } from 'react-daisyui'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { DrawerProps } from '../Header'

const DrawerComponent = ({ openDrawer, toggleDrawer }: DrawerProps) => {
  return (
    <Drawer
      open={openDrawer}
      onClose={toggleDrawer}
      direction="left"
      duration={400}
      className="w-auto rounded-r-2xl"
    >
      <ul className="menu p-4 overflow-x-hidden w-80 rounded-r-2xl h-full bg-base-100 text-primary">
        <li>
          <button className="flex w-full justify-between">
            <div className="flex gap-3 justify-center items-center">
              <FontAwesomeIcon icon={faUserCircle} className="w-8 h-8" />
              <div className="flex flex-col items-start">
                <h1 className="text-md font-semibold">Murilo Fernandes</h1>
                <h2 className="text-xs">Viaja milhas</h2>
              </div>
            </div>
            <div onClick={toggleDrawer}>
              <div>
                <svg
                  className="swap-off fill-current text-info-content z-20"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </div>
            </div>
          </button>
        </li>
        <li>
          <button className="flex pl-14 w-full justify-between">
            <h1>Criar cobrança</h1>
          </button>
        </li>
        <li>
          <button className="flex pl-14 w-full justify-between">
            <h1>Página inicial</h1>
          </button>
        </li>
        <li>
          <button className="flex w-full justify-between">
            <div className="flex gap-3 justify-center items-center">
              <FontAwesomeIcon icon={faReceipt} className="w-7 h-7" />

              <h1 className="text-md">Extrato</h1>
            </div>
          </button>
        </li>
        <li>
          <button className="flex pl-14 w-full justify-between">
            <h1>Cobranças</h1>
          </button>
        </li>
        <li>
          <button className="flex pl-14 w-full justify-between">
            <h1>Meu dinheiro</h1>
          </button>
        </li>
        <li>
          <button className="flex pl-14 w-full justify-between">
            <h1>Minha contas</h1>
          </button>
        </li>
        <li>
          <button className="flex pl-14 w-full justify-between">
            <h1>Taxas e planos</h1>
          </button>
        </li>
        <li>
          <button className="flex pl-14 w-full justify-between">
            <h1>Fale com a gente</h1>
          </button>
        </li>
        <Divider />
        <li>
          <button className="flex w-full justify-between">
            <div className="flex gap-3 justify-center items-center">
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className="w-7 h-7"
              />

              <h1 className="text-md">Sair</h1>
            </div>
          </button>
        </li>
      </ul>
    </Drawer>
  )
}
export default DrawerComponent
