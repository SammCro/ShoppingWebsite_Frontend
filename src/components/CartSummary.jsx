import React from "react";

import { NavLink } from "react-router-dom";

import { Button, Dropdown, Label } from "semantic-ui-react";

import { useSelector } from "react-redux";

//divider ikiye bölmek için
// spa olduğu için direkt NavLink ve to ile gider.

export default function CartSummary() {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div>
      <Dropdown item text="Cart">
        <Dropdown.Menu>
          {cartItems.map((cartItem) => (
            <Dropdown.Item>
              {cartItem.product.productName}
              <Label style={{marginLeft:"10px"}}>{cartItem.quantity} </Label>
              <Button color="red">Remove</Button>
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
