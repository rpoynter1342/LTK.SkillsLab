import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BasicForm from './BasicForm';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import store from './store';
import { Provider } from 'react-redux';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/todo",
    element: <BasicForm />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
