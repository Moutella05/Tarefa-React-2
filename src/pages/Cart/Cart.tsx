import { Link } from "react-router-dom";
import useCartStore from "../../stores/CartStore";
import "./Cart.css";
import Trash from "../../assets/Trash.svg";

export default function Cart() {
  const cart = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeItem);
  return (
    <div className='Main'>
      <Link className='Home' to="/">&lt; Carrinho de Compras</Link>
      <div className="Cart">
        {cart.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          cart.map((item) => (
            <>
              <div key={item.id} className="Cart_Item">
                <img src={item.capa} alt={item.titulo} />
                <div className="Cart_Item_Info">
                  <h2>{item.titulo}</h2>
                  <h3>Autor: {item.autor}</h3>
                  <p>R$ {item.preco.toFixed(2).replace('.', ',')}</p>
                  <button className="Remove_Button" onClick={() => removeFromCart(item.id)}>
                    <img className="Trash" src={Trash} alt="Remover" />
                  </button>
                </div>
              </div>
              <div>
                <button className='Comprar'>Comprar</button>
              </div>
            </>
          ))
        )}
      </div>
    </div>
  );
}