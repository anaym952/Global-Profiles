
import { useState } from "react";
import { Navbar, Footer, Main, About, Profiles } from "./components"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Main/><Footer/></>
    },
    {
      path: "/about",
      element: <><Navbar/><About/><Footer/></>
    },
    {
      path: "/profiles",
      element: <><Navbar/><Profiles/><Footer/></>
    }
  ])

  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
  
}

export default App
