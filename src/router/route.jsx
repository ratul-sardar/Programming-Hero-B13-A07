import { createBrowserRouter } from "react-router";
import Root from "../components/layout/Root";
import Timeline from "../pages/Timeline";
import Stats from "../pages/Stats";
import Home from "../pages/Home";
import FriendDetails from "../pages/FriendDetails";
import PageNotFound404 from "../pages/PageNotFound404";

export const router = createBrowserRouter([
  {
    path: "/",

    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("/friends.json"),
        Component: Home,
      },
      {
        path: "/friend/:id",
        loader: ({ params }) => fetch("/friends.json"),
        Component: FriendDetails,
      },
      {
        path: "/timeline",
        Component: Timeline,
      },
      {
        path: "/stats",
        Component: Stats,
      },
    ],
  },
  {
    path: "/*",
    Component: PageNotFound404,
  },
]);
