import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./providers";
import { LoginPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
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
