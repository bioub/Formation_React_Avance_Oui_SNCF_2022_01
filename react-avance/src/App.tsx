import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Select from './select/Select';
import Todos from './todos-hooks/Todos';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Export from './Export';

function App() {
  const [prenom, setPrenom] = useState('Titi');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
      <main>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/export">Export</Link>
          </li>
        </ul>
      </nav>
      <Routes>
      
        <Route path='/' element={<Home />} />
        <Route path="/export" element={<Export />} />
        
      </Routes>
        {/* <Select items={['Toto', 'Titi', 'Tata']} selected={prenom} onSelected={(item) => setPrenom(item)} />
        <Todos /> */}
      </main>
    </div>
  );
}

export default App;
