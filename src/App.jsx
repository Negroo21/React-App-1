import { createHashRouter, RouterProvider } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import Home from "./Components/Home/Home";
const routes = createHashRouter([
  {
    path: '/', 
    element: <Layout />,
    children: [
      { index: true, element: <Home /> }, 
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },

    ]
  }
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
