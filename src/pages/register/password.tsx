import { ContainerRegister } from '../../components/ContainerRegister'
import { Input } from '../../components/InputElement'

export default function password() {
  return (
    <ContainerRegister
      title="Vamos criar uma senha para o seu
    acesso?"
      progress={80}
    >
      <div className="grid gap-4">
        <Input
          type="password"
          name="password"
          label="Senha"
          placeholder="********"
        />
        <Input
          type="password"
          name="confirm_password"
          label="Confirmar senha"
          placeholder="********"
        />
      </div>
    </ContainerRegister>
  )
}
