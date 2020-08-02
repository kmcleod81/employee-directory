import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Container from './components/Container/Container';
import Search from './components/Search/Search';





function App() {
  return (
    <div className="App">
      <Container>
        <Jumbotron />
        <Search />
      </Container>
    </div>
  );
}

export default App;
