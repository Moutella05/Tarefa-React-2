import { Link } from 'react-router-dom';
import './Card_Home.modules.css'

interface Livro {
  id: number;
  titulo: string;
  autor: string;
  capa: string;
  genero: string;
  preco: number;
  sinopse: string;
}

export default function Card_Home({ livro }: { livro: Livro }) {
  return (
    <Link className="card-home" to={`/livro/${livro.id}`}>
      <img src={livro.capa} alt={livro.titulo} className="card-home-img" />
      <div className="card-home-info">
        <div>
          <h2>{livro.titulo}</h2>
          <h3>{livro.autor}</h3>
        </div>
        <div className="card-home-preco">
          <span>R$ {livro?.preco.toFixed(2).replace('.', ',')}</span>
        </div>
      </div>
    </Link>
  );
}
