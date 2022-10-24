import { ContainerRegister } from '../../components/ContainerRegister'
import { Input } from '../../components/InputElement'

export default function email() {
  return (
    <ContainerRegister title="Qual seu email?" progress={60}>
      <>
        <Input
          type="text"
          name="email"
          label="E-mail"
          placeholder="buy.pay@gmail.com"
        />
      </>
    </ContainerRegister>
  )
}
