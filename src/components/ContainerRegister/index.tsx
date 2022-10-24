import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import LogoImg from '../../assets/images/LogoWhite.webp'

interface Props {
  children: ReactElement
  span?: string
  title: string
  progress: string | number
  titleButton?: string
}

export const ContainerRegister = ({
  children,
  span,
  title,
  progress,
  titleButton = 'Próximo',
}: Props) => {
  const router = useRouter()
  return (
    <div className="h-[100vh] bg-primary">
      <div className="h-[20vh] relative bg-primary flex justify-center items-center">
        <Image src={LogoImg} width={177} height={49} layout="fixed" />
      </div>
      <div className="flex justify-center">
        <div className="card-body px-4 max-w-md gap-0 w-full flex flex-col justify-between h-[80vh] rounded-t-2xl absolute bg-primary-content">
          <div>
            <div className="w-full flex flex-row gap-3 items-center mb-7">
              <FontAwesomeIcon
                onClick={() => router.back()}
                icon={faArrowLeft}
                className="text-black w-6 h-6 cursor-pointer"
              />

              <progress
                className="progress progress-primary w-full"
                value={progress}
                max="100"
              ></progress>
              <div />
            </div>
            <span className="text-primary/60 text-sm font-normal">{span}</span>
            <h1 className="mt-2 text-black text-xl font-medium mb-5">
              {title}
            </h1>

            <div>{children}</div>
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            {titleButton}
          </button>
        </div>
      </div>
    </div>
  )
}
