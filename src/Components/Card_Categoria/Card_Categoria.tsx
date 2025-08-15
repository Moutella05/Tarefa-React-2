import { Link } from 'react-router-dom';
import './Card_Categoria.modules.css'
import type { Livro } from '../../Type/Livro';


export default function Card_Categoria({ livro }: { livro: Livro }) {
  return (
    <Link className="card-categoria" to={`/livro/${livro.id}`}>
      <div className='Img'>
        <img src={livro.capa} alt={livro.titulo} className="card-categoria-img" />
      </div>
      <div className="card-categoria-info">
        <div className='card-categoria-titulo'>
          <h2>{livro.titulo}</h2>
          <h3>{livro.autor}</h3>
        </div>
        <div className="card-categoria-preco">
          <span>R$ {livro?.preco.toFixed(2).replace('.', ',')}</span>
        </div>
      </div>
    </Link>
  );
}
