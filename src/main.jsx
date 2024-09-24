import * as React from "react";
import * as ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LanguageProvider } from './contexts/LanguageContext';

import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import CertificatesPage from "./pages/Certificates";
import NotFound from "./pages/NotFound";
import Illness from "./pages/Illness";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/certificates',
        element: <CertificatesPage />
      },
      {
        path: "/illness/:id",
        element: <Illness />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </React.StrictMode>
);
