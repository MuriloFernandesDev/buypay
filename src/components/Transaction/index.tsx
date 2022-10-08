interface TransactionProps {
  name: string
  date: string
  value: string
}
const Transaction = ({ name, date, value }: TransactionProps) => {
  return (
    <div className="flex justify-between">
      <div className="w-full">
        <span className="text-primary">{name}</span>
      </div>
      <div className="flex flex-col items-end w-full">
        <p className="text-xs text-black/50">{date}</p>
        <p className="text-success text-base font-bold">R$ {value}</p>
      </div>
    </div>
  )
}

export default Transaction
