import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock, FiMousePointer } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />

    <Content>
      <form>
          <h1>Faca o seu cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input 
            name="password" 
            icon={FiLock} 
            type="password" 
            placeholder="Senha" 
          />

          <Select name="categoria" icon={FiMousePointer}/>

          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="forget">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
  </Container>
);

export default SignUp;