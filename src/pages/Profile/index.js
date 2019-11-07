import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" type="text" />
        <Input name="email" placeholder="Seu endereço de e-mail" type="email" />

        <hr />

        <Input name="oldPassword" placeholder="Senha atual" type="password" />
        <Input name="password" placeholder="Nova senha" type="password" />
        <Input
          name="confirmPassword"
          placeholder="Cofirme a nova senha"
          type="password"
        />
        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="button">Sair do GoBarber</button>
    </Container>
  );
}
