import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contacts";
import Resume from "./components/Resume";

// const container = document.getElementById("root");
// if (!container) throw new Error("Failed to find the root element");
//const root = ReactDOM.createRoot(container);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // errorElement: <NotFound />,
        children: [
            { index: true, path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/resume", element: <Resume /> },
            { path: "/contact", element: <Contact /> },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
