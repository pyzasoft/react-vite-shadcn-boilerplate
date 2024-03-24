import { Outlet, ScrollRestoration } from "react-router-dom";
import "swiper/css/bundle";
import { memo } from "react";
import { ThemeProvider } from "./components/ui/ThemeProvider";

const App = memo(function App() {

  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <div className="h-screen w-screen px-0 mx-0 bg-zinc-900">
          {/* {!hideNavBars && <TopNavBar />} */}
          <Outlet />
        </div>
        {/* {!hideNavBars && <BottomTab />} */}
        <ScrollRestoration
          getKey={(location) => {
            return location.pathname;
          }}
        />
      </ThemeProvider>
    </>
  );
});

export default App;


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


// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* const appStyle = (theme: Theme) => css`
  .swiper-pagination-bullet {
    background: ${theme.colors.primary};
  }
  background-color: ${theme.background.primary};
`;
 */
