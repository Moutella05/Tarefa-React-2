import PromoIMG from "../../assets/PromoIMG.png";
import Card_Home from "../../Components/Card_Home/Card_Home";
import "./Home.css";
import useGetLivro from "../../hooks/useGetLivro";
import { Link } from "react-router-dom";

const Categorias = [
  "Best-sellers",
  "Clássicos",
  "Infantil",
  "Suspense",
  "Distopia",
  "Ficção Científica",
  "Fantasia",
];

export default function Home() {
  const livros = useGetLivro();

  return (
    <>
  <Link to={`/autor/${encodeURIComponent("Paulo Coelho")}`}>
        <img className="PromoIMG" src={PromoIMG} alt="Promo" />
      </Link>
      <div className="Main">
        {Categorias.map((categoria) => (
          <div className="Categoria">
            <div className='Top_Livros'>
              <h1>{categoria}</h1>
              <h2 className='Ver_Mais'><Link to={`/categoria/${encodeURIComponent(categoria)}`}>Ver mais</Link></h2>
            </div>
            <div className="Livros_Categoria">
              {livros
                .filter((l) => l.genero === categoria)
                .slice(0, 4)
                .map((livro) => (
                  <Card_Home key={livro.id} livro={livro} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
