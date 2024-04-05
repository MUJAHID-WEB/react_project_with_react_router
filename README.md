# Getting Started with Create React App

### `npx create-react-app my-app`
`cd my-app`
`npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

### `npm test`

### `npm run build`

### Adding a Router
Create React App doesn't prescribe a specific routing solution, but React Router is the most popular one.

To add it, run:

            npm install --save react-router-dom


# BrowserRouter
- in indesx.js:

            import { BrowserRouter } from "react-router-dom";

            const root = ReactDOM.createRoot(document.getElementById("root"));
            root.render(
            <React.StrictMode>
                <BrowserRouter>
                <App />
                </BrowserRouter>
            </React.StrictMode>
            );

And in App.js:


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

# HashRouter
- in indesx.js:


            import { HashRouter } from "react-router-dom";

            const root = ReactDOM.createRoot(document.getElementById("root"));
            root.render(
            <React.StrictMode>
                <HashRouter>
                <App />
                </HashRouter>
            </React.StrictMode>
            );


And in App.js: same as `BrouserRouter`

And url will be with `#` : http://localhost:3000/#/books


# unstable_HistoryRouter 
Not recommend to use

# MemoryRouter

- in indesx.js:


            import { MemoryRouter } from "react-router-dom";

            const root = ReactDOM.createRoot(document.getElementById("root"));
            root.render(
            <React.StrictMode>
                <MemoryRouter>
                <App />
                </MemoryRouter>
            </React.StrictMode>
            );


And in App.js: same as `BrouserRouter`

And url will be memorized in initial and no change in url when change the route: http://localhost:3000/

