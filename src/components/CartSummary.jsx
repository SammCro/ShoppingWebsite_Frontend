import React from "react";

import {NavLink} from 'react-router-dom'

import { Dropdown } from "semantic-ui-react";

//divider ikiye bölmek için
// spa olduğu için direkt NavLink ve to ile gider.

export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Cart">
        <Dropdown.Menu>
          <Dropdown.Item>Acel</Dropdown.Item>
          <Dropdown.Item>Monster</Dropdown.Item>
          <Dropdown.Item>Mac</Dropdown.Item>
          <Dropdown.Divider></Dropdown.Divider>
          <Dropdown.Item as={NavLink} to ='/cartDetail'>Go to cart</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
