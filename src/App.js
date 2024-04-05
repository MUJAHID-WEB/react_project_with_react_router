
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import BookList from './pages/BookList';

function App() {
  return (
    <div className="App">
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/books'>Books</Link>
        </li>
      </ul>
    </nav>
        <Routes>
          <Route path='' element={<Home/>} />

          <Route path='/books' element={<BookList/>} />
        </Routes>
    </div>
  );
}

export default App;
