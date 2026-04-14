import { createBrowserRouter } from "react-router";
import Root from "../components/layout/Root";
import Timeline from "../pages/Timeline";
import Stats from "../pages/Stats";
import Home from "../pages/Home";
import FriendDetails from "../pages/FriendDetails";
import PageNotFound404 from "../pages/PageNotFound404";
import { Component } from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: ({ params }) => fetch("/friends.json"),
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/friend/:id", Component: FriendDetails },
    ],
  },
  {
    path: "/timeline",
    Component: Timeline,
  },
  {
    path: "/stats",
    Component: Stats,
  },
  {
    path: "/*",
    Component: PageNotFound404,
  },
]);
