import { useEffect, useState } from "react";
import type { Livro } from "../Type/Livro";
import axios from "axios";

export default function useGetLivro(){
  const [livros, setLivros] = useState<Livro[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/livros")
      .then((response) => setLivros(response.data))
      .catch((error) => console.error("Erro ao buscar livros:", error));
  }, []);

  return livros;
}