import React from 'react';
import CampoTexto from '../CampoTexto';
import './FormComp.css';
import ListaSuspensa from './ListaSuspensa';
import Botao from '../Botao/botao';
import { createUser } from '../services/userServices';

const universidades = ['UNINASSAU', 'UNIFG'];

const aoSalvar = async (evento) => {
  try {
    evento.preventDefault();
    console.log('Form foi submetido');

    const dadosFormulario = {
      nome: evento.target.nome.value,
      email: evento.target.email.value,
      cpf: evento.target.cpf.value,
      cep: evento.target.cep.value,
      universidade: evento.target.universidade.value,
    };

    const resposta = await createUser(dadosFormulario);
    console.log('Resposta da API:', resposta.data);
  } catch (erro) {
    console.error('Erro ao enviar dados:', erro);
  }
};

const FormComp = () => {
  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Informe os dados para se cadastrar:</h2>
        <CampoTexto label='Nome' name='nome' obrigatorio={true} placeholder='Informe seu nome' />
        <CampoTexto label='Email' name='email' obrigatorio={true} placeholder='Informe seu email' />
        <CampoTexto label='CPF' name='cpf' obrigatorio={true} placeholder='Informe seu CPF' />
        <CampoTexto label='CEP' name='cep' obrigatorio={true} placeholder='Informe seu CEP' />
        <ListaSuspensa label='Selecione a Universidade' name='universidade' itens={universidades} />
        <Botao type='submit'> Cadastrar </Botao>
      </form>
    </section>
  );
};

export default FormComp;