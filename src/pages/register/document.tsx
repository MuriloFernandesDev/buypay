import { ContainerRegister } from '../../components/ContainerRegister'
import { Input } from '../../components/InputElement'

export default function document() {
  return (
    <ContainerRegister title="Qual seu nome CNPJ?" progress={40}>
      <>
        <Input
          type="text"
          name="CNPJ"
          label="CNPJ"
          placeholder="45.679.123/0001-94"
        />
      </>
    </ContainerRegister>
  )
}
