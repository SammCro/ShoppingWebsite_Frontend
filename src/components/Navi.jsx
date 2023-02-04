import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";

import  {useNavigate} from 'react-router-dom';

import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import CartSummary from "./CartSummary";

export default function Navi() {
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
            <CartSummary></CartSummary>
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
