import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Router';
import Main from './layout/Main'

function App() {

  return (
    // <Main></Main>
    <div className="bg-[black] ">  
       <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App;
