import React from "react";
import { Button, Card } from "react-bootstrap";
import formatCurrency from "./formatCurrency";
import { useShopingCart } from "../context/ShopingCartContext";
const StorItemContent = ({ id, name, price, imgUrl }) => {
   
   const {getItemsQuantity,increasCArtQuantity,decreasCArtQuantity,removeItemFromCArt}=useShopingCart()
    const quantity=getItemsQuantity(id);
  return (
    <div>
      <Card>
        <Card.Img
          src={imgUrl}
          variant="top"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body>
        <Card.Title><span >{name}</span><span className="text-muted me-2 float-end">{formatCurrency(price)}</span></Card.Title>
      <div className="mt-4 ">
        {quantity===0?<Button className="w-100" onClick={()=>increasCArtQuantity(id)}>Add to the Card</Button>: <div className=" d-flex align-items-center flex-column"><div className="d-flex space-betwen "><Button onClick={()=>decreasCArtQuantity(id)}>-</Button> <div style={{fontSize:"x-large"}}><span className="me-3 ms-3">{quantity}</span></div> <Button onClick={()=>increasCArtQuantity(id)}>+</Button></div> <Button className="mt-3 btn btn-danger" onClick={()=>removeItemFromCArt(id)}>Remove</Button> </div>}
      </div>
      
      </Card.Body>
      </Card>
    </div>
  );
};

export default StorItemContent;
