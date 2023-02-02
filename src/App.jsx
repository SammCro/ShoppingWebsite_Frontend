import "./App.css";
import Dashboard from "./pages/Dashboard";
import "semantic-ui-css/semantic.min.css";

import Navi from "./components/Navi";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <Container className="main">
        <Dashboard></Dashboard>
      </Container>
    </div>
  );
}

export default App;
