import React from 'react'
import { Divider } from 'react-daisyui'

interface TransactionProps {
  name: string
  date: string
  value: string
  disabledDivider?: boolean
}
const Transaction = ({
  name,
  date,
  value,
  disabledDivider,
}: TransactionProps) => {
  return (
    <React.Fragment>
      {!disabledDivider && <Divider className="m-0" />}

      <div className="flex justify-between mb-5">
        <div className="w-full">
          <span className="text-primary">{name}</span>
        </div>
        <div className="flex flex-col items-end w-full">
          <p className="text-xs text-black/50">{date}</p>
          <p className="text-success text-base font-bold">R$ {value}</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Transaction
