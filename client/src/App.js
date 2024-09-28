
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import User from './Components/GetUser/User';

function App() {

  const route= createBrowserRouter([
    {
      path:"/",
      element: <User/>,
    },
    {
      path:"/add",
      element: "User Add page",
    },
    {
      path:"/edit",
      element: "User Update page",
    },

  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
      
    </div>
  );
}

export default App;
