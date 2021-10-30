import React, {useState} from 'react'
import './App.css';
import styled from 'styled-components'

//valorAlt função para pegar o valor do meu campo input...

function App() {

  const[valor, setValor]=useState()
  const[porcetagem, setPorcentagem]=useState()

  const valorAlt= (e)=>{
    setValor(e.target.value)
  }

  const porcentagemAlt = (e)=>{
    setPorcentagem(e.target.value)
  }

 

  return (
   <div>
     <h3>Calculadora de gorjeta</h3>

     <p>Quanto deu a Conta ?</p>

     <input type={Number} value={valor} onChange={valorAlt}/><br>
     </br>

     <p>Qual há porcentagem de gorjeta?</p>
     <input type={Number} value={porcetagem} onChange={porcentagemAlt}/><br></br>
       <div className="resutado">
         
         <p>Total R$ : {valor}</p>
         <p>Gorjeta {porcetagem}%</p>
         <p>Total á Pagar {parseInt(valor) + parseInt((porcetagem/100)*valor)}</p>


         
        
       </div>
   </div>
    
  )
}

export default App;
