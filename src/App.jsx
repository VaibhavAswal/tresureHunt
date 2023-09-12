import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Clue1 from './pages/clue1/Clue1'
import Clue2 from './pages/clue2/Clue2'
import Clue3 from './pages/clue3/Clue3'
import All from './pages/all/All'


const router2 = createBrowserRouter([
    {
    path: "/*",
    element: <h2>Ooops! nothing at this url...</h2>,
  },
  {
    path: "/wcc4i",
    element: <Clue1/>,
  },
    {
    path: "/kdci",
    element: <Clue2/>,
  },
    {
    path: "/jkkk",
    element: <Clue3/>,
  },
  {
    path: "/all",
    element: <All/>,
  },
]);

function App() {

  return (
    <div className='app'>
      <RouterProvider router={router2} />
    </div>
  )
}

export default App
