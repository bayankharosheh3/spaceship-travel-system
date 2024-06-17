import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import CrewMembers from "./pages/CrewMembersPage";
import Missions from "./pages/MissionsPage";
import Spaceships from "./pages/SpaceshipsPage";
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
