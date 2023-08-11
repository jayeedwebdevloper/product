import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Router/Router';
import Home from './Components/Home/Home';
import 'animate.css';
import Products from './Components/ProductsPage/Products';
import About from './Components/AboutPage/About';
import Cart from './Components/CartPage/Cart';
import Message from './Components/OrderConfirmMessage/Message';
import Coming from './Components/ComingSoonPage/Coming';
import Register from './Components/Account/Register/Register';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Router></Router>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: async () => {
            return fetch('products.json')
          }
        },
        {
          path: '/products',
          element: <Products></Products>,
          loader: async () => {
            return fetch('products.json')
          }
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/cart',
          element: <Cart></Cart>,
          loader: async () => {
            return fetch('products.json')
          }
        },
        {
          path: '/account',
          element: <Register></Register>
        },
        {
          path: '/complete',
          element: <Message></Message>
        },
        {
          path: '*',
          element: <Coming></Coming>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>

    </>
  )
}

export default App
