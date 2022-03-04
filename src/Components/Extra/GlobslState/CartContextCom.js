import React,{useState} from 'react'

export const CartContext = React.createContext()

const CartContextCom = (props) => {
    const [cart,setCart] = useState([]) 
    
    const [login,setLogin] = useState([])
    const onAdd = (product) => {
        const exist = cart.find((x) => x.id === product.id);
        if (exist) {
          setCart(
            cart.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
            )
          );
        } else {
          setCart([...cart, { ...product, qty: 1 }]);
        }
      };
      const onRemove = (product) => {
        const exist = cart.find((x) => x.id === product.id);
        if (exist.qty === 1) {
          setCart(cart.filter((x) => x.id !== product.id));
        } else {
          setCart(
            cart.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
            )
          );
        }
      };

    return (
        <CartContext.Provider value={[cart,setCart,onAdd,onRemove,login,setLogin]} > {props.children} </CartContext.Provider>
    )
}

export default CartContextCom
