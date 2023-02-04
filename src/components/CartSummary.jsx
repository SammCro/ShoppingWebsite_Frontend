import React from "react";

import { NavLink } from "react-router-dom";

import { Button, Dropdown, Label } from "semantic-ui-react";

import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/actions/cartActions";

import {toast} from 'react-toastify'

//divider ikiye bölmek için
// spa olduğu için direkt NavLink ve to ile gider.

export default function CartSummary() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveCart = (product) => {
    dispatch(removeFromCart(product));
    toast.warning("product is removed from the cart")
  }
  return (
    <div>
      <Dropdown item text="Cart">
        <Dropdown.Menu>
          {cartItems.map((cartItem) => (
            <Dropdown.Item key={cartItem.product.id}>
              {cartItem.product.productName}
              <Label style={{marginLeft:"10px"}}>{cartItem.quantity} </Label>
              <Button color="red" onClick={()=>{
                handleRemoveCart(cartItem.product)
              }}>Remove</Button>
            </Dropdown.Item>
          ))}

          <Dropdown.Divider></Dropdown.Divider>
          <Dropdown.Item as={NavLink} to="/cartDetail">
            Go to cart
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
