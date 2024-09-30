
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import User from './Components/GetUser/User';
import Add from './Components/AddUser/Add';

function App() {

  const route= createBrowserRouter([
    {
      path:"/",
      element: <User/>,
    },
    {
      path:"/add",
      element: <Add/>,
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
