import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  useParams
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/app",
    element: <App/>,
  },
  {
    path: "/app/home",
    element: <App/>,
  },
  {
    path: "/app/about",
    element: <App/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <RouterProvider router={router} />
  //</React.StrictMode>,
)