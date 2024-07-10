import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import LOGO from "@/assets/images/own/logo_vertical.png";
import POWERDED_BY_LOGO from "@/assets/images/own/logo_powered_by.png";
import { gameLoadingStyles } from "./gameLoadingStyles";

interface IGameLoading {
  visible?: boolean;
  maxTimeout?: number;
  onHide: () => void;
}

export function GameLoading({
  visible,
  maxTimeout = 10 * 1000,
  onHide = () => {},
}: IGameLoading) {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getFooterLogo = () => {
    return POWERDED_BY_LOGO;
  };

  const [show, setShow] = useState(true);

  /*   const hideLoader = useCallback(() => {
    onHide();
    if (progressBarRef.current?.style) {
      progressBarRef.current.style.width = "100% !important";
    }
    if (containerRef.current?.style) {
      containerRef.current.style.opacity = 0;
    }
    setTimeout(() => {
      if (containerRef.current?.style) containerRef.current.style.display = "none";
    }, 2000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  useEffect(() => {
    if (!visible) {
      setShow(false);
      onHide();
    } else {
      setShow(true);
      setTimeout(() => {
        onHide();
      }, maxTimeout);
      /* if (containerRef.current) {
        setTimeout(() => {
          hideLoader();
        }, maxTimeout);
      } */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  /* let mainLogo = LOGO;
  const partner_logo_enabled = application?.is_splash_screen_partner_logo_enabled && application?.splash_screen_logo;
  if (partner_logo_enabled) mainLogo = application?.splash_screen_logo; */

  if (!show) return null;

  return (
    <div
      css={gameLoadingStyles}
      ref={containerRef}
      className={cn("game-loading-overlay", {
        // desktop: isDesktop,
      })}
    >
      <div className={`flex flex-col justify-center items-center w-full`}>
        <img src={LOGO} alt="Logo" className="logo partner" />
        <div className="mx-auto mt-4 progress-bar-container">
          <div
            className={cn("progress-bar", {
              // partner: partner_logo_enabled,
            })}
            ref={progressBarRef}
          />
        </div>
        <div className="powered-by">
          <img src={getFooterLogo()} alt="Logo" className="logo small" />
        </div>
      </div>
    </div>
  );
}

export default GameLoading;
