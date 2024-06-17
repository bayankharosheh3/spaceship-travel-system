import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import {
  SpaceshipsPage,
  CrewMembersPage,
  MissionsPage,
  NotFoundPage,
} from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <SpaceshipsPage />,
        },

        {
          path: "crew-members",
          element: <CrewMembersPage />,
        },
        {
          path: "missions",
          element: <MissionsPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
