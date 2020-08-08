import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Jumbotron from './components/Jumbotron';
import Container from './components/Container';
import Search from './components/Search';
import Table from './components/Table';



function App() {
  return (
    <div className="App">
      <Container>
        <Jumbotron />
        <Search />
        <Table />
      </Container>
    </div>
  );
}

export default App;
