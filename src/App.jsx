import { useState } from "react";
import Banner from "./Components/Banner";
import ContainerProduto from "./Components/ContainerProduto";
import Header from "./Components/Header";

export default function App(){
  const [listaProdutos, setListaProdutos] = useState(perfumes)

  function mudarQuantidade(quantidade, novaQuantidade){
    quantidade.quantidade = novaQuantidade
    setListaProdutos([...listaProdutos])
  }
  
  return(
    <>
    <Header />
    <Banner />
    <ContainerProduto listaDeProdutos={listaProdutos} mudarQuantidade={mudarQuantidade}  />
    </>
  )
}

const perfumes = [
  {
    qtdEstoque: 1,
    image:
      "http://d2r9epyceweg5n.cloudfront.net/stores/001/894/024/products/d_nq_np_624049-mlb44618045533_012021-o1-0baf89cbad2e3f69ba16373349271304-640-0.jpg",
    nome: "Luna",
    preco: 124.9,
    tipo: "nacional",
    fragrancia: "feminino",
    quantidade: 0
  },

  {
    qtdEstoque: 2,
    image: "https://cdn.fragrancenet.com/images/photos/600x600/115689.jpg",
    nome: "Azzaro",
    preco: 149.31,
    tipo: "importado",
    fragrancia: "masculino",
    quantidade: 0
  },
  {
    qtdEstoque: 2,
    image:
      "https://www.cellshop.com/10845491-thickbox_default/perfume-ferrari-black-edt-125ml-masculino.jpg",

    nome: "Ferrari Black",
    preco: 179.9,
    tipo: "importado",
    fragrancia: "masculino",
    quantidade: 0
  },

  {
    qtdEstoque: 5,
    image:
      "https://carrefourbr.vtexassets.com/arquivos/ids/14791225/Malbec-Gold-100ml.jpg?v=637515763397730000",
    nome: "Malbec",
    preco: 189.9,
    tipo: "nacional",
    fragrancia: "masculino",
    quantidade: 0
  },
  {
    qtdEstoque: 5,
    image:
      "https://d25uawst4gjx3y.cloudfront.net/Custom/Content/Products/04/23/0423_perfume-sauvage-dior-eau-de-parfum-masculino_l2_637795723203860011.jpg",

    nome: "Salvage",
    preco: 205.54,
    tipo: "importado",
    fragrancia: "masculino",
    quantidade: 0
  },
  {
    qtdEstoque: 3,
    image: "https://fraguru.com/mdimg/perfume/375x500.35250.jpg",
    nome: "Quasar",
    preco: 129.0,
    tipo: "nacional",
    fragrancia: "masculino",
    quantidade: 0
  },
  {
    qtdEstoque: 1,
    image:
      "https://static.wixstatic.com/media/74672b_ee447304ed9845f188b6fd735088082f~mv2.jpg/v1/fill/w_756,h_1200,al_c,q_85/74672b_ee447304ed9845f188b6fd735088082f~mv2.jpg",
    nome: "Luna",
    preco: 100.0,
    tipo: "nacional",
    fragrancia: "feminino",
    quantidade: 0
  },
  {
    qtdEstoque: 5,
    image:
      "https://img.lojasrenner.com.br/item/502287603/large/1.jpg",
    nome: "Kouros",
    preco: 279.9,
    tipo: "importado",
    fragrancia: "masculino",
    quantidade: 0
  },
  {
    qtdEstoque: 6,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_629665-MLB50182647448_062022-O.webp",
    nome: "Florata My Blue",
    preco: 129.9,
    tipo: "Nacional",
    fragrancia: "Feminino",
    quantidade: 0
  },
  {
    qtdEstoque: 6,
    image:
      "https://images-americanas.b2w.io/produtos/2747428591/imagens/natura-deo-parfum-essencial-mirra-masculino-100ml/2747428603_1_xlarge.jpg",
    nome: "Essencial",
    preco: 213.0,
    tipo: "Nacional",
    fragrancia: "Masculino",
    quantidade: 0
  },
];
