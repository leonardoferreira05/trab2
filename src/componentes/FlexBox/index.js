import {useState, useEffect } from 'react';
import './index.css';
import Cartao from '../Cartao';
import axios from 'axios';

const FlexBox=() => {
  const [estrutura, setEstrutura] = useState(null);
 useEffect(() => {
async function pegaDado() {
const resposta = await axios.get(
    'https://age-of-empires-2-api.herokuapp.com/api/v1/structures',
    );
setEstrutura(resposta.data);
}
pegaDado();
},[]);

if(estrutura === null) {
 return <p>Carregando...</p>;
}

return (
 <>
   <h1>AGE OF EMPIRES --- ESTRUTURAS</h1>
	<div className="flex-box">
	{estrutura.structures.map((item) => (
	  <Cartao key={item.id} strut={item}></Cartao>
	))}
	</div>
 </>
);
};
 
export default FlexBox;