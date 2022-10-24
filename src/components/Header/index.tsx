import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import DrawerComponent from '../DrawerComponent'

export interface DrawerProps {
  toggleDrawer: () => void
  openDrawer: boolean
}

const Header = ({ toggleDrawer, openDrawer }: DrawerProps) => {
  return (
    <React.Fragment>
      <div className="pt-5 pb-4 border-b-2 border-primary-content/50">
        <div className="flex justify-between items-center px-6">
          <div className="flex gap-3 items-center">
            <div className="w-12 h-12 rounded-full relative flex justify-center items-center bg-primary-content">
              <FontAwesomeIcon
                icon={faUser}
                className="w-6 h-6 text-primary absolute"
              />
            </div>
            <div className="text-primary-content">
              <p className="text-sm">Bem-vindo, </p>
              <p className="text-2xl font-bold">Murilo</p>
            </div>
          </div>
          <button className="btn btn-sm bg-transparent border-transparent">
            <FontAwesomeIcon
              onClick={toggleDrawer}
              icon={faBars}
              className="w-7 h-7 text-primary-content"
            />
          </button>
        </div>
      </div>
      <DrawerComponent openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
    </React.Fragment>
  )
}

export default Header
