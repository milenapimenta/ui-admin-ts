import { CheckOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent";
import FormComponent from "../FormComponent"
import InputComponent from "../InputTableComponent";

const UserForm = () => {
  return (
    <>
      <h1>Novo Usuário</h1>
      <FormComponent>
        <div style={{display: 'flex', justifyContent: "space-between"}}>
          <div style={{width: '45%'}}>
            <InputComponent
              label='Nome'
              name='name'
              required={true}
              message= 'O campo nome é obrigatorio!'
              placeholder= 'Digite o nome...'
            />
          </div>
          <div style={{width: '45%'}}>
            <InputComponent
              label='Sobrenome'
              name='lastname'
              required={true}
              message= 'O campo sobrenome é obrigatorio!'
              placeholder= 'Digite o sobrenome...'
            />
          </div>
        </div>
        <InputComponent
          label='E-mail'
          name='email'
          required={true}
          message= 'O campo e-mail é obrigatorio!'
          placeholder= 'Digite o e-mail...'
        />
        <InputComponent
          label='Senha'
          name='password'
          required={true}
          message= 'O campo senha é obrigatorio!'
          placeholder= 'Digite a senha...'
        />
        <div style={{display: 'flex', justifyContent: 'start'}}>
          <ButtonComponent
            htmlType="submit"
            text='Salvar'
            icon={<CheckOutlined />}
          />
        </div>
      </FormComponent>
    </>
  )
}

export default UserForm;
