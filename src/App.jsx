import React from 'react'
import "./App.scss"
import Navbar from "./Components/navbar/Navbar"
import Footer from "./Components/footer/Footer"
import Home from "./pages/home/Home"
import Gigs from "./pages/gigs/Gigs"
import { Gig } from "./pages/gig/Gig"
import Orders from "./pages/orders/Orders"
import { MyGigs } from "./pages/myGigs/MyGigs"
import { Add } from "./pages/add/Add"
import Messages from "./pages/messages/Messages"
import Message from "./pages/message/Message"
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

function App() {
  const Layout = () =>{
    return(
      <div className='App'>
      <Navbar />
      <Outlet />
      <Footer />
      </div>
    )
  }

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/gigs",
          element:<Gigs/>,
        },
        {
          path:"/gig/:id",
          element:<Gig/>,
        },
        {
          path:"/orders",
          element:<Orders/>,
        },
        {
          path:"/myGigs",
          element:<MyGigs/>,
        },
        {
          path:"/add",
          element:<Add/>,
        },
        {
          path:"/messages",
          element:<Messages/>,
        },
        {
          path:"/message/:id",
          element:<Message/>,
        },
      ]
    },
  ])

   return (
    <div>
    <RouterProvider router={Router} />
      </div>
      )
}
export default App