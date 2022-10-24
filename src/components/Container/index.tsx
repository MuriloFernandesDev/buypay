import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ReactElement } from 'react'

interface Props {
  children: ReactElement
  title: string
  message?: string
  bgColor?: string | null
  home?: boolean
}

const Container = ({
  children,
  title,
  message,
  bgColor = null,
  home,
}: Props) => {
  return (
    <React.Fragment>
      <div className="w-full rounded-none  relative min-h-screen bg-primary">
        <div
          className={
            'card-body px-4 gap-0  rounded-none w-full  rounded-t-xl absolute  ' +
            (bgColor !== null ? bgColor : 'bg-primary-content') +
            (!home ? ' mt-10' : '')
          }
        >
          {!home && (
            <div className="w-full flex flex-row justify-between items-center">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-primary w-8 h-8"
              />

              <h1 className="text-primary text-xl font-bold">{title}</h1>

              <div />
            </div>
          )}

          {!!home && (
            <div className="w-full flex flex-row justify-center items-center">
              <h1 className="text-primary text-xl font-bold">{title}</h1>

              <div />
            </div>
          )}

          {!!message && (
            <h1 className="text-primary text-sm text-start opacity-70 my-7">
              {message}
            </h1>
          )}
          {!!home && <div className="divider"></div>}
          <div className="mb-12">{children}</div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Container
