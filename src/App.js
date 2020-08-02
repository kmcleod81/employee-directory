import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Container from './components/Container/Container';




function App() {
  return (
    <div className="App">
      <Container>
        <Jumbotron />
      </Container>
    </div>
  );
}

export default App;
