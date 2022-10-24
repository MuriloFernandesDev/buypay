import { ContainerRegister } from '../../components/ContainerRegister'
import { Input } from '../../components/InputElement'

export default function name() {
  return (
    <ContainerRegister
      title="Qual seu nome completo?"
      span="Vamos começar"
      progress={20}
    >
      <>
        <Input
          type="text"
          name="Nome"
          label="Nome completo"
          placeholder="Nome"
        />
      </>
    </ContainerRegister>
  )
}
