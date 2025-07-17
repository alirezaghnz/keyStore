import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayOut from "./ui/AppLayOut";
import NotFound from "./ui/NotFound";
import Home from "./ui/Home";

const router = createBrowserRouter([
  {
    element: <AppLayOut />,
    errorElement: <NotFound />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
