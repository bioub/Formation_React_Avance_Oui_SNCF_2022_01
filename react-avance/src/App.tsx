import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Select from './select/Select';
import Todos from './todos-hooks/Todos';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Export from './Export';
import { CounterContainer } from './CounterContainer';
import { UsersListContainer } from './users/UsersListContainer';
import { PostsListContainer } from './posts/PostsListContainer';

function App() {
  const [prenom, setPrenom] = useState('Titi');

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/export">Export</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <main>
      
      <Routes>
      
      <Route path='/' element={<Home />} />
        <Route path='/counter' element={<CounterContainer />} />
        <Route path="/export" element={<Export />} />
        <Route path="/users" element={<UsersListContainer />} />
        <Route path="/posts" element={<PostsListContainer />} />
      </Routes>
        {/* <Select items={['Toto', 'Titi', 'Tata']} selected={prenom} onSelected={(item) => setPrenom(item)} />
        <Todos /> */}
      </main>
    </div>
  );
}

export default App;
