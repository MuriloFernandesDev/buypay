import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Divider } from 'react-daisyui'

export const ClientInfo = () => {
  return (
    <div>
      <div className="flex gap-3 p-4 text-primary">
        <FontAwesomeIcon icon={faUser} className="w-7 h-7 " />
        <div className="flex flex-col items-start">
          <p className="text-sm font-medium">Erick</p>
          <p className="text-xs font-normal">erick@gmail.com</p>
          <p className="text-xs font-normal">+5518996344123</p>
        </div>
      </div>
      <div className="divider my-0" />
    </div>
  )
}
