import CampoTexto from '../CampoTexto';
import './FormComp.css'
import ListaSuspensa from './ListaSuspensa';
import Botao from '../Botao/botao';





const universidades = [
'UNINASSAU',
'UNIFG' 
    ]


    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
        }

const FormComp = () => {



    
   
        
    
return (
<section className='formulario'>
<form onSubmit={aoSalvar}>
<h2>Informe os dados para se cadastrar:</h2>
    <CampoTexto label="Nome" obrigatorio={true} placeholder="Informe seu nome"/>
    <CampoTexto label="Email" obrigatorio={true} placeholder="Informe seu email"/>
    <CampoTexto label="CPF" obrigatorio={true} placeholder="Informe seu CPF"/>
    <CampoTexto label="CEP" obrigatorio={true} placeholder="Informe seu CEP"/>
    <ListaSuspensa label="Selecione a Universidade" itens={universidades}/>
    <Botao> Cadastrar </Botao>

    
    



</form>

</section>
)
}




export default FormComp
