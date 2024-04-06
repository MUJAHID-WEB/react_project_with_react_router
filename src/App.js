import { Routes, Route, Link, useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound"
import BookRoutes from "./BookRoutes";

function App() {

  let element = useRoutes([
    {
      path:'/about',
      element: <About/>
    },
    {
      path:'/contact',
      element: <Contact/>
    },
  ])
  return (
    <div className="App">
      <Routes location='/books'>
        <Route path="/books" element={<h1>Extra Content specified by location</h1>} />
      </Routes>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {element}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Nested Route */}
        {/* <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route> */}

        <Route path="/books/*" element={<BookRoutes />}/>

        {/* <Route path='/books' element={<BookList/>} /> */}
        {/* <Route path='/books/:id' element={<Book/>} />  */}
        {/* Here ':id' means, anything can come after '/books/---' */}
        {/* <Route path='/books/new' element={<NewBook/>} />  */}
        {/* Here 'new' means, specify with hard-code which can come after '/books/new' */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
