
import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    

    
    return (

        <div className='lista-suspensa'>
        <label>{props.label}</label>
        <select className='lista-suspensa select'>
        {props.itens.map(item => {
            return <option key={item}>{item}</option>
        })}
        </select>
        </div>
        )
    }        

    export default ListaSuspensa
