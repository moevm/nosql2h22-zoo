import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./providers";
import {AnimalPage, EmployeePage, LoginPage, TicketPage, TimetablePage} from "./pages";
import { PrivateLayout } from "./layouts";
import { appRoutes } from "./constants";

const router = createBrowserRouter([
  {
    path: appRoutes.root,
    element: <PrivateLayout />,
    children: [
      {
        path: appRoutes.root,
        element: <div>Hello world!</div>,
      },
      {
        path: appRoutes.animal,
        element: <AnimalPage />,
      },
      {
        path: appRoutes.employee,
        element: <EmployeePage />,
      },
      {
        path: appRoutes.timetable,
        element: <TimetablePage />,
      },
      {
        path: appRoutes.ticket,
        element: <TicketPage />,
      },
    ],
  },
  {
    path: appRoutes.login,
    element: <LoginPage />,
  },
]);

export const App = () => {
  return (
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  );
}
