import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";

import  {useNavigate} from 'react-router-dom';

import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import CartSummary from "./CartSummary";
import { useSelector } from "react-redux";



//useSelector statelere abone olmak için kullanılan yöntemdir.
//useDispatch ise aksiyonlara üye olmak için kullanılan yöntemdir.


export default function Navi() {
  
  const {cartItems} = useSelector(state => state.cart);

  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/products")
    setIsAuthenticated(false);
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
            {
              cartItems.length>0&&<CartSummary></CartSummary>

            }
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
