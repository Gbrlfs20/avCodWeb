
import Input from '../Input'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { getPsi } from '../services/psi'



function Pesquisa() {

    const [psiCadastrados, setpsiCadastrados] = useState([])
    
    const [psi, setPsi] = useState([])
}


useEffect ( ()=>{
	fetchPsi()
}, [])


