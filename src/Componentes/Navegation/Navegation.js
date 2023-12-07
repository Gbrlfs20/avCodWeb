import { Link } from "react-router-dom"
import './Navegation.css'

function Navegation () {

    return( <header className='cabecalho'>
      
    <nav className='links'>
      <ul>
        <li className="botao"><Link to="/Home">Home</Link></li>
        <li className="botao"><Link to="/psiInfo">Psicologos</Link></li>
        <li className="botao"><Link to="/users">Usuários</Link></li>
      </ul>
    </nav>
  </header> )
}


export default Navegation