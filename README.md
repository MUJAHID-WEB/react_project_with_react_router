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
- in index.js:

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

- Dynamic Segments
    Segments of the URL can be dynamic placeholders that are parsed and provided to various apis.

            <Route path='/books/:id' element={<Book/>} /> 
            {/* Here ':id' is means, anything can come after '/books/---' */}


- in `BookList.js`: Link some books as list


            export default function BookList() {
            return (
                <>
                <div>BookList</div>

                <Link to='/books/1'>Book 1</Link>
                <Link to='/books/2'>Book 2</Link>
                <Link to='/books/3'>Book 3</Link>

                </>
            )
            }


- in `Book.js`: use `useParams` to collect the passing `id` through Link

            import { useParams } from 'react-router-dom'

            export default function Book() {

                const {id} = useParams()
            return (
                <div>Book {id}</div>
            )
            }

- Ranked Route Matching
    When matching URLs to routes, React Router will rank the routes according to the number of segments, static segments, dynamic segments, splats, etc. and pick the most specific match.

    For example, consider these two routes:

                <Route path='/books/:id' element={<Book/>} /> 
                <Route path='/books/new' element={<NewBook/>} /> 

    Now consider the URL is http://localhost:3000/books/new.

    Even though both routes technically match the URL (new could be the :id), you intuitively know that we want the second route (/books/new) to be picked. React Router's matching algorithm knows that, too.

    With ranked routes, you don't have to worry about route ordering.


- `404 page` shown when no route match

             <Route path='*' element={<NotFound/>} />

- `Nested Route` 

            <Route path='/books' >
                <Route index element={<BookList/>} />
                <Route path=':id' element={<Book/>} /> 
                <Route path='new' element={<NewBook/>} /> 
            </Route>

# HashRouter
- in index.js:


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

- in index.js:


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

# StaticRouter

- in index.js:


            import { StaticRouter } from "react-router-dom/server";

            const root = ReactDOM.createRoot(document.getElementById("root"));
            root.render(
            <React.StrictMode>
                <StaticRouter location='/'>
                <App />
                </StaticRouter>
            </React.StrictMode>
            );


And in App.js: same as `BrouserRouter`

And to render on server in correct page by definning `location`: http://localhost:3000/

# NativeRouter

 It is the recommended interface for running React Router in a React Native app

            import * as React from "react";
            import { NativeRouter } from "react-router-native";

            function App() {
            return (
                <NativeRouter>
                {/* The rest of your app goes here */}
                </NativeRouter>
            );
            }

# Router

It is the low-level interface that is shared by all router components (like <BrowserRouter> and <StaticRouter>).



# Layout set

- in `BookLayout.js`: here `<Outlet/>` is used for render others

        export default function BookLayout() {
            return (
                <>
                <Link to="/books/1">Book 1</Link>
                <Link to="/books/2">Book 2</Link>
                <Link to="/books/3">Book 3</Link>

                <br />

                <Link to="/books/new">New Book </Link>

               <Outlet context={{ hello: 'World' }}/>
                </>
            );
        }

- in `App.js` :

        {/* Nested Route */}
          <Route path='/books' element={<BookLayout/>}>
            <Route index element={<BookList/>} />
            <Route path=':id' element={<Book/>} /> 
            <Route path='new' element={<NewBook/>} /> 
          </Route>

- in `Book.js` :

        import { useOutletContext, useParams } from 'react-router-dom'

        export default function Book() {

            const {id} = useParams()
            const obj = useOutletContext()
        return (
            <div>Book {id} {obj.hello}</div>
        )
        }


# NestedRoute can be set with this approach

- Create new  file named `BookRoutes.js`:

        export default function BookRoutes() {
            return (
                <>
                <Routes>
                {/* Nested Route */}
                <Route element={<BookLayout />}>
                    <Route index element={<BookList />} />
                    <Route path=":id" element={<Book />} />
                    <Route path="new" element={<NewBook />} />
                    </Route>

                </Routes>

                </>
            )
        }

- Modify `App.js` :

         <Route path="/books/*" element={<BookRoutes />}/>



# Using `useRoutes` hook:

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


# Navigate 

- `Link` has some useful property

    1. replace: ostly used in login page

            <Link to="/" replace>Home</Link>

    2. reloadDocument: To reload whole page

            <Link to="/" reloadDocument>Home</Link>

    3. state: 

- `NavLink`  

    1. isActive

- `Navigate` Component

        export default function NotFound() {
            return <Navigate to='/' />
        }

- `useNavigate` hook

            import { useNavigate } from 'react-router-dom'

            export default function NotFound() {
            const navigate = useNavigate()

            useEffect(()=>{
                setTimeout(()=>{
                navigate('/')
                }, 1000)
            },[])
            
            return (
                <div>NotFound</div>
            )
            }
