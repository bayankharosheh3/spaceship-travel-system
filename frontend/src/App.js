import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import CrewMembers from "./pages/CrewMembers";
import Missions from "./pages/Missions";
import Spaceships from "./pages/Spaceships";
import NotFound from "./pages/NotFound";
import { Layout } from "./components/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Spaceships />,
        },

        {
          path: "crew-members",
          element: <CrewMembers />,
        },
        {
          path: "missions",
          element: <Missions />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
