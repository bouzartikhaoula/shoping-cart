import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useShopingCart } from "../context/ShopingCartContext";
import CartItem from "./CartItem";

const ShopingCart = ({isOpen}) => {
    const {cartItem,closeCart,openCart}=useShopingCart()
  return (
    <>
      <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
    {cartItem.map((item)=>(
        <CartItem key={item.id} {...item}/>
    ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ShopingCart;
