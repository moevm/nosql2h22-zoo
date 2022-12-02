import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./providers";
import {AnimalPage, EmployeePage, HomePage, LoginPage, TicketPage, TimetablePage, VideoPage} from "./pages";
import { PrivateLayout } from "./layouts";
import { appRoutes } from "./constants";
import {ModalsProvider} from "./providers/ModalProvider";
import {AnimalCreate, EmployeeCreate, TicketCreate, TimetableCreate} from "./modals";

const router = createBrowserRouter([
  {
    path: appRoutes.root,
    element: <PrivateLayout />,
    children: [
      {
        path: appRoutes.root,
        element: <HomePage />,
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
      {
        path: appRoutes.video,
        element: <VideoPage />,
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
        <ModalsProvider>
          <RouterProvider router={router} />

          <EmployeeCreate />
          <AnimalCreate />
          <TicketCreate />
          <TimetableCreate />
        </ModalsProvider>
      </AuthProvider>
  );
}
