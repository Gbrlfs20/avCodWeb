import React, { useState } from 'react';
import CampoTexto from '../CampoTexto'; // Importe o componente CampoTexto
import './FormComp.css'; // Importe os estilos CSS necessários
import ListaSuspensa from './ListaSuspensa'; // Importe o componente ListaSuspensa
import Botao from '../Botao/botao';
import { createUser } from '../services/userServices';

const universidades = ['UNINASSAU', 'UNIFG'];

const FormComp = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [CPF, setCpf] = useState('');
  const [CEP, setCep] = useState('');
  const [universidade, setUniversidade] = useState('');

  const aoSalvar = async () => {
    try {
      console.log('Form foi submetido');

      const dadosFormulario = {
        nome,
        email,
        CPF,
        CEP,
        universidade,
      };

      const resposta = await createUser(dadosFormulario);
      console.log('Resposta da API:', resposta.data);
    } catch (erro) {
      console.error('Erro ao enviar dados:', erro);
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    aoSalvar();
  };

  return (
    <section className='formulario'>
      <form>
        <h2>Informe os dados para se cadastrar:</h2>
        <CampoTexto label='Nome' value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Informe seu nome' />
        <CampoTexto label='Email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Informe seu email' />
        <CampoTexto label='CPF' value={CPF} onChange={(e) => setCpf(e.target.value)} placeholder='Informe seu CPF' />
        <CampoTexto label='CEP' value={CEP} onChange={(e) => setCep(e.target.value)} placeholder='Informe seu CEP' />
        <ListaSuspensa label='Selecione a Universidade' value={universidade} onChange={(e) => setUniversidade(e.target.value)} itens={universidades} />
        <Botao type='submit' onClick={handleClick}>
          Cadastrar
        </Botao>
      </form>
    </section>
  );
};

export default FormComp;