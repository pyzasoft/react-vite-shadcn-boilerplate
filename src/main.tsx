import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
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
// import GameLoading from "./components/feature-specific/loaders/GameLoading/index.tsx";
import store from "./redux/store.ts";
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
      <Provider store={store}>
        <RouterProvider fallbackElement={<PageLoader />} router={router} />
      </Provider>
    </React.StrictMode>
  </>
);
