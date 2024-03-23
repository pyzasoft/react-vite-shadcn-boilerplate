import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import PageLoader from "./Pages/PageLoader.tsx";
// import { InitializeGPT } from "./Components/Shared/GooglePublisherTag.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
      errorElement={<div>Handle Error</div>}
      // loader={appLoader}
    >
      {/* <Route index element={<HomePage />} /> */}
      {/* <Route path="home" element={<HomePage />} /> */}
      {/* <Route path="tournament/:tournamentId?" element={<PlayGamePage />} /> */}
      {/* <Route path="arcade/:slug?" element={<PlayGamePage />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    {/* <React.StrictMode> */}
    {/* <InitializeGPT /> */}
    <RouterProvider fallbackElement={<PageLoader />} router={router} />
    {/* </React.StrictMode> */}
  </>
);
