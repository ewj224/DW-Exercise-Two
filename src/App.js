import React from 'react';
import{
  createBrowserRouter,
  RouterProvider, 
  Route,
} from "react-router-dom";

import './App.css';
import Article from "./pages/article";
import List from './pages/list';

const router = createBrowserRouter([{
  path: "/",
  element: <List />,
}]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
