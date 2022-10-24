import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'

interface CircleOptionProps {
  icon: IconDefinition
  title: string
}

const CircleOption = ({ icon, title }: CircleOptionProps) => {
  return (
    <div className=" flex flex-col items-center">
      <div className="btn w-16 h-16 bg-primary-content rounded-full relative flex justify-center items-center">
        <FontAwesomeIcon icon={icon} className="w-6 h-6 text-primary" />
      </div>
      <h1 className="text-xs font-normal text-primary-content mt-1">{title}</h1>
    </div>
  )
}

export default CircleOption
