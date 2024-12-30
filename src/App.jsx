
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Portfolio from './Components/Portfolio'
import About from './Components/About'
import Service from './Components/Service'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home/></>
    },
    {
      path: "/contact",
      element: <><Contact/></>
    },
    {
      path: "/portfolio",
      element: <><Portfolio/></>
    },
    {
      path: "/about",
      element: <><About/></>
    },
    {
      path: "/service",
      element: <><Service/></>
    },
])

  return (
    <>
   <RouterProvider router={router} />
    </>
  )
}

export default App
