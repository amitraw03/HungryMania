import { createBrowserRouter, RouterProvider } from "react-router-dom"
import React, { lazy, Suspense } from "react";
import Body from "./components/Body"
import Contact from "./components/Contact"
import About from "./components/About"
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import Spinner from "./components/Spinner";
// import Grocery from "./components/Grocery"  


//Lazzy Loading (very optimized way of code splitting and to prevent from creation of single huge memory file)
const Grocery = lazy(() => import("./components/Grocery"));  //importing in this way for dynamic bundling

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/grocery",
      element: <Suspense fallback={<Spinner />}><Grocery /></Suspense>,  //suspense working in the meanwhile time
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/restaurants/:resId",
      element: <RestaurantMenu />,
    }
  ])


  return (
    <>
     <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
