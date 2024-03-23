/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import { css, type Theme } from "@emotion/react";
// import BottomTab from "./Layout/BottomTab";
// import TopNavBar from "./Layout/TopNavBar";
import { Outlet, ScrollRestoration } from "react-router-dom";
// import "./index.css";
import "swiper/css/bundle";
// import axios from "axios";
// import { ROOT_API_URL } from "./constants";
import { memo } from "react";
// import axios from "axios";
// import { ROOT_API_URL } from "./constants";

/* const baseColors = {
  primary: "#a40871",
  secondary: "#ffa326",
  tertiary: "#0e0b19",
  white: "#FFF",
  black: "#0e0b1b",
}; */

/* const theme: Theme = {
  colors: {
    ...baseColors,
    background: baseColors.tertiary,
    fontPrimary: baseColors.white,
    fontSecondary: baseColors.black,
    buttonPrimaryBackground: baseColors.secondary,
    buttonPrimaryFont: baseColors.tertiary,
    buttonSecondaryBackground: baseColors.tertiary,
    buttonSecondaryFont: baseColors.secondary,
  },
  border: {
    radius: "25px",
  },
  background: {
    primary: baseColors.tertiary,
    secondary: baseColors.secondary,
    gradient: `linear-gradient(${baseColors.primary}, ${baseColors.secondary})`,
  },
  button: {
    primary: {
      background: baseColors.secondary,
      font: baseColors.tertiary,
    },
    secondary: {
      background: baseColors.tertiary,
      font: baseColors.secondary,
    },
  },
}; */

const App = memo(function App() {
  // const params = useParams();
  // const { appData } = useLoaderData() as { appData: any };
  // const arcadeOnly = true;
  // const location = useLocation();
  // const [hideNavBars, setHideNavBars] = useState(false);
  // const [loading, setLoading] = useState(false);

  return (
    <>
      {" "}
      {/* <ThemeProvider theme={theme}> */}
      {/* <div css={appStyle} className="overflow-auto px-0"> */}
      <div className="overflow-auto px-0">
        {/* {!hideNavBars && <TopNavBar />} */}
        <div
          style={{
            paddingTop: "4rem",
            height: "100vh",
          }}
        >
          <Outlet />
        </div>
        {/* {!hideNavBars && <BottomTab />} */}
      </div>
      <ScrollRestoration
        getKey={(location) => {
          return location.pathname;
        }}
      />
      {/* </ThemeProvider> */}
    </>
  );
});

export default App;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* const appStyle = (theme: Theme) => css`
  .swiper-pagination-bullet {
    background: ${theme.colors.primary};
  }
  background-color: ${theme.background.primary};
`;
 */