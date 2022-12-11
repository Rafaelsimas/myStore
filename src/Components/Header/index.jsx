import style from './style.css'
import LinksDoMenu from './LinksDoMenu'
export default function Header(){

  const menuItens = [
    {url: 'Home', link: 'home'},
    {url: 'Perfumes', link: 'perfumes'},
    {url: 'Contato', link: 'contato'},
  ]
  
    return(
        <header id="topo">
        <nav id="caixa">
          <h1>HMRParfum</h1>
          <ul>
            {menuItens.map(elementoMenu => (
              <li>
              <LinksDoMenu url={elementoMenu.url} link={elementoMenu.link} />
            </li>
            ))}
          </ul>
        </nav>
       </header>
    )
}

