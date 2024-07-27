import React from "react";
import storeItem from "../data/storeItem.json";
import { Button, Stack } from "react-bootstrap";
import formatCurrency from "./formatCurrency";
import { useShopingCart } from "../context/ShopingCartContext";
//ilement in cart
const CartItem = ({ id, quantity }) => {
    const {removeItemFromCArt}=useShopingCart()
  const item = storeItem.find((i) => i.id === id);
  if (item == null) {
    return null;
  }
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "125px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name} {""}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x {quantity}
            </span>
          )}
          <div className="text-muted" style={{ fontSize: "0.85rem" }}>
          {" "}
          {formatCurrency(item.price)}
        </div>
        </div>
        
        <div>{formatCurrency(item.price *quantity)}</div>
      </div>
      <Button variant="outline-denger" size="sm" onClick={()=>removeItemFromCArt(id)}>

        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
