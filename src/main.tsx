import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import PageLoader from "./pages/PageLoader.tsx";
import "./index.css";
import { LoginPage } from "./pages/LoginPage.tsx";
import React from "react";
// import { InitializeGPT } from "./Components/Shared/GooglePublisherTag.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
      errorElement={<div>Handle Error</div>}
      // loader={appLoader}
    >
      <Route index element={<LoginPage />} />
      {/* <Route path="home" element={<HomePage />} /> */}
      {/* <Route path="tournament/:tournamentId?" element={<PlayGamePage />} /> */}
      {/* <Route path="arcade/:slug?" element={<PlayGamePage />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <React.StrictMode>
      <RouterProvider fallbackElement={<PageLoader />} router={router} />
    </React.StrictMode>
  </>
);
