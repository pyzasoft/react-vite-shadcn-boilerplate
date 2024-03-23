import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import { css, useTheme } from "@emotion/react";
// import Loader from "../assets/animations/RootLoader.lottie";

const PageLoader: React.FC = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        background: ${theme.background.primary};
      `}
      style={{
        height: "100vh",
        // background: "#000",
      }}
    >
      <DotLottiePlayer
        src={`${import.meta.env.BASE_URL}assets/RootLoader.lottie`}
        autoplay
        loop
      >
        {/* <Controls /> */}
      </DotLottiePlayer>
    </div>
  );
};

export default PageLoader;
