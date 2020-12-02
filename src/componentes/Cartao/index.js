import './index.css';
 
const Cartao = ({ strut }) => {
 return (
  <>
    <div className= "card">
     
         <h2>Nome:</h2>
	  <span>{strut.name}</span>
       <h2>Expansão:</h2>
	  <span>{strut.expansion}</span>
	   <h2>Era:</h2>
	  <span>{strut.age}</span>
	   <h2>Armadura:</h2>
	  <span>{strut.armor}</span>
 
</div>
</>
);
};

export default Cartao;