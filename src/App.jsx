//Comeponents
import Dashboard from "./components/Dashboard";
import Navi from "./components/Navi";


import { ToastContainer } from 'react-toastify';
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
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
