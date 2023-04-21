import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createHashRouter } from "react-router-dom"
import Main from './components/Main';
import About from './components/About';
import Navbar from './components/Navbar/Navbar';
const router = createHashRouter([
  {
      path: "/",
      element: <Navbar />,
      children: [
          {
              path: "/",
              element: <Main />,
          },
          {
              path: "/about",
              element: <About />,
          },
      ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <App />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
