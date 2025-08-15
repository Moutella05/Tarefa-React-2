import axios from "axios";
import { useEffect, useState } from "react";
import type { Livro } from "../../Type/Livro";
import { Link } from "react-router-dom";
import Card_Categoria from "../../Components/Card_Categoria/Card_Categoria";
import Search from "../../assets/Search.svg";
import "./Promo_Page.css";

export default function Promo_Page() {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [livrosOriginais, setLivrosOriginais] = useState<Livro[]>([]);
  const autor = decodeURIComponent(window.location.pathname.split("/").pop() || "");

  useEffect(() => {
    axios
      .get("http://localhost:3000/livros")
      .then((response) => {
        setLivros(response.data);
        setLivrosOriginais(response.data);
      })
      .catch((error) => console.error("Erro ao buscar livros:", error));
  }, []);

  const [pesquisaFocus, setPesquisaFocus] = useState(false);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <div className="Busca">
          <img src={Search} alt="Buscar" />
          <input
            type="text"
            placeholder="Buscar livro por título"
            style={
              pesquisaFocus
                ? { border: "3px solid #EF6B4A", borderRadius: "4px" }
                : {}
            }
            onFocus={() => setPesquisaFocus(true)}
            onBlur={() => setPesquisaFocus(false)}
            onChange={(e) => {
              const valor = e.target.value.toLowerCase();
              if (valor === "") {
                setLivros(livrosOriginais);
              } else {
                const livrosFiltrados = livrosOriginais.filter((livro) =>
                  livro.titulo.toLowerCase().includes(valor)
                );
                setLivros(livrosFiltrados);
              }
            }}
          />
        </div>
      </div>
      <div className="Main">
        <button className="Voltar">
          <Link to="/">&lt; Detalhes do Livro</Link>
        </button>
        <div className="Livros">
          {livros
            .filter((l) => l.autor && l.autor === autor)
            .map((livro) => (
              <Card_Categoria key={livro.id} livro={livro} />
            ))}
        </div>
      </div>
    </>
  );
}
