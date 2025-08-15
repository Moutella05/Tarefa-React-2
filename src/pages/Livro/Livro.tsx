import { useEffect, useState } from "react";
import axios from "axios";
import { type Livro } from "../../Type/Livro";
import './Livro.css'
import { Link } from "react-router-dom";
import useCartStore from "../../stores/CartStore";


export default function Produto() {
  const [livros, setLivros] = useState<Livro | null>(null);
  const addToCart = useCartStore((state) => state.addItem);

  useEffect(() => {
    const id = window.location.pathname.split("/").pop();
    axios
      .get(`http://localhost:3000/livros/${id}`)
      .then((response) => setLivros(response.data))
      .catch((error) => console.error("Erro ao buscar livros:", error));
  }, []); 
  return(
    <>
    <div className='Produto'>
      <button className='Voltar'><Link to="/">&lt; Detalhes do Livro</Link></button>
      <div className='Livro_Card'>
        <img src={livros?.capa} alt={livros?.titulo} />
        <div className='Livro_Info'>
          <h1>{livros?.titulo}</h1>
          <h2>{livros?.autor}</h2>
          <h3>Sinopse:</h3>
          <p>{livros?.sinopse}</p>
        </div>
      </div>
      <div className='Comprar_Container'>
        <span>R$ {livros?.preco ? livros.preco.toFixed(2).replace('.', ',') : "--"}</span>
        <button
          className='Comprar'
          onClick={() => {
            if (livros) {
              addToCart({ ...livros, id: String(livros.id) });
              window.alert("Adicionado ao carrinho!");
            }
          }}
          disabled={!livros}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
    </>
  )
}