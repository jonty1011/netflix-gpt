import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"


const Body = () => {
    // createBrowserRouter creates a router object with route definations
    const appRouter = createBrowserRouter([
        {path:'/',
         element:<Login/>
        },
        {path:"/browse",
            element:<Browse/>
        }
    ])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
