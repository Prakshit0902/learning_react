import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'


/* This is the first method for routing there also exist an alternate method */

// const router = createBrowserRouter([{
//   path : '/',
//   element : <Layout/>,
//   children : [{
//     path: '',
//     element : <Home />
//   },
//   {
//     path : '/about',
//     element : <About/>
//   },
//   {
//     path : '/contact',
//     element : <Contact/>
//   }
// ]
// }])


/* This is an alternate method  */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
      <Route path='' element = {<Home/>} />
      <Route path='/about' element = {<About/>} />
      <Route path='/contact' element = {<Contact/>} />
      <Route path='user/:userid' element = {<User/>} />
    </Route>

    // here in the route there also exists a loader attribute which where we can pass callback for ex fetching an api
    // loader makes the data optimized enough as when we hover over the element it will load the api 
    // and when the route is called the data from api is already loaded and the loaded data can be loaded in the component 
    // by using the useLoaderData() in the component jsx which is hook and get the data from it 
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
