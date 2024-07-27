import { createContext, useContext, useState } from "react";
import ShopingCart from "../component/ShopingCart";
const ShoppingCartContext = createContext({});

const ShopingCartProvider = ({ children }) => {
    //for the Card
  const [cartItem, setCartItem] = useState([]);

    const [isOpen, setIsOpen] = useState(false);
    const openCart=()=>{
        setIsOpen(true)
    }
    const closeCart=()=>{
        setIsOpen(false)
    }
    //nember of all the Items
    const cartQuantity=cartItem.reduce((quantity,item)=>item.quantity+quantity,0)
  
  const getItemsQuantity = (id) => {
    return cartItem.find((item) => item.id === id)?.quantity || 0;
  };
  const increasCArtQuantity = (id) => {
    setCartItem((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });

      }
    });
  };

  const decreasCArtQuantity = (id) => {
    setCartItem((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return currItems.filter((item)=>item.id!==id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });

      }
    });
  };

  const removeItemFromCArt=(id)=>{
    setCartItem((currItems)=>currItems.filter((item)=>item.id !==id))
  }

  return (
    <ShoppingCartContext.Provider value={{ cartItem ,getItemsQuantity,increasCArtQuantity,decreasCArtQuantity ,removeItemFromCArt,openCart,closeCart,cartQuantity}}>
      {children}
      <ShopingCart isOpen={isOpen}/>
    </ShoppingCartContext.Provider>
  );
};

export default ShopingCartProvider;

// عندو علاقة بال ipa
export const useShopingCart = () => {
  return useContext(ShoppingCartContext);
};
