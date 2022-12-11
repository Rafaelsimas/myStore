import './style.css'
import Produto from "../Produto"
import { useState } from 'react'

export default function ContainerProduto(props){
    const {listaDeProdutos, mudarQuantidade} = props

    const [meuProduto, setMeuProduto] = useState()

    function emContrucao(){
      alert('Em breve daremos suporte a essa funcionalidade')
    }
    
    return(
      <>
      <div className='filtrar-item'>
        <input onChange={e => setMeuProduto(e.target.value)} type="text" placeholder='Buscar um perfume' className='input-buscar' />
        <div className='box-buscar'>
        <span>Perfume: {meuProduto}</span>
        <button onClick={emContrucao} className='btn-buscar'>Buscar</button>
        </div>
      </div>
        <div className="containerCard">
      {listaDeProdutos.map(produto => (
        <Produto produto={produto} mudarQuantidade={mudarQuantidade} />
        ))}
    </div>
      </>
    )
}