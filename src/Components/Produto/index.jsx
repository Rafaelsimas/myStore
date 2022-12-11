export default function Produto(props){
    const {produto, mudarQuantidade} = props
    const {image, qtdEstoque, nome, preco, quantidade, tipo} = produto

    function decrementarContador(event){
        mudarQuantidade(produto, quantidade-1)
        event.stopPropagation()

    }

    function incrementarContador(event){
        mudarQuantidade(produto, quantidade+1)
        event.stopPropagation()
    }

    function emConstrucao(){
      alert('Em breve daremos suporte a essa funcionalidade!')
    }
    
    return(
        <div className="cardProduto">
        <img src={image} alt="imagem do produto" />
        <div className="qtdEstoque">Em estoque ({qtdEstoque})</div>
        <div className="nomeProduto">{nome}</div>
        <div className="precoProduto">R$ {preco.toFixed(2)}</div>
        <div className="tipoProduto">{tipo}</div>
        <div className="box-btn-qtd">
          <button className="btn-menos" onClick={decrementarContador}>-</button>
          <span>{quantidade}</span>
          <button className="btn-mais" onClick={incrementarContador}>+</button>
        </div>
        <button onClick={emConstrucao} className="btn-comprar">Comprar</button>
      </div>
    )
}