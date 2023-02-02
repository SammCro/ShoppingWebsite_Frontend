//Comeponents
import Dashboard from "./pages/Dashboard";
import Navi from "./components/Navi";

//Services 


//Styling files
import "./App.css";
import "semantic-ui-css/semantic.min.css";

//Semantic UI components
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
