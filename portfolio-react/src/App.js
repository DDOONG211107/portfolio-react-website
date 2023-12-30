import Homepage from "./pages/Home";
import Test from "./pages/Test";
import MyHomeDeatil from "./pages/MyHomeDetail";
import TutoringDetail from "./pages/TutoringDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/myhome-des",
    element: <MyHomeDeatil />,
  },
  {
    path: "/tutoring-des",
    element: <TutoringDetail />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
