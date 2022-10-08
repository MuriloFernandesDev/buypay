import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Header = () => {
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
          <FontAwesomeIcon
            icon={faBars}
            className="w-7 h-7 text-primary-content"
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header
