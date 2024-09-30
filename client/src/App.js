
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import User from './Components/GetUser/User';
import Add from './Components/AddUser/Add';
import Edit from './Components/UpdateUser/Edit';

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
      element: <Edit/>,
    },

  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
      
    </div>
  );
}

export default App;
