import { css } from "@emotion/react";
import RankIcon from "../assets/icons/ribbon-shield.svg";
import RedeemIcon from "../assets/icons/open-treasure-chest.svg";
import HomeIcon from "../assets/icons/gamepad.svg";
import MissionIcon from "../assets/icons/bullseye.svg";
import classnames from "classnames";
import { useState } from "react";
import { Theme } from "@emotion/react";
import { rgba } from "polished";

const BottomTab = () => {
  const [activeTab, setActiveTab] = useState("home");

  const onClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div
      className="d-flex flex-row justify-content-around align-items-center"
      css={bottomTabStyle}
    >
      <div
        onClick={() => onClick("home")}
        className={classnames(
          "d-flex flex-column justify-content-center align-items-center text-center",
          {
            active: activeTab === "home",
          }
        )}
      >
        <div className={"icon"}>
          <HomeIcon />
        </div>
        <span>
          <small>
            <b>Home</b>
          </small>
        </span>
      </div>

      <div
        onClick={() => onClick("mission")}
        className={classnames(
          "d-flex flex-column justify-content-center align-items-center text-center",
          {
            active: activeTab === "mission",
          }
        )}
      >
        <div className="icon">
          <MissionIcon />
        </div>
        <span>
          <small>
            <b>Missions</b>
          </small>
        </span>
      </div>

      <div
        onClick={() => onClick("rank")}
        className={classnames(
          "d-flex flex-column justify-content-center align-items-center text-center",
          {
            active: activeTab === "rank",
          }
        )}
      >
        <div className="icon">
          <RankIcon />
        </div>
        <span>
          <small>
            <b>Leaderboard</b>
          </small>
        </span>
      </div>

      <div
        onClick={() => onClick("redemption")}
        className={classnames(
          "d-flex flex-column justify-content-center align-items-center text-center",
          {
            active: activeTab === "redemption",
          }
        )}
      >
        <div className="icon">
          <RedeemIcon />
        </div>
        <span>
          <small>
            <b>Redeem</b>
          </small>
        </span>
      </div>
    </div>
  );
};

export default BottomTab;

const bottomTabStyle = (theme: Theme) => css`
  background: ${rgba("#000000f0", 0.9)};
  position: fixed;
  height: 4rem;
  z-index: 2;
  width: 100%;
  bottom: -2px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  box-shadow: 1px 1px 20px 5px ${theme.colors.primary};
  span {
    font-size: 0.9rem;
    display: none;
    color: ${theme.colors.fontPrimary}
  }
  .icon {
    .icon {
      fill: #d7c3e69d;
    }
    width: 30px;
    height: auto;
    /* background: white; */
    border-radius: 50%;
    /* padding: 6px; */
  }

  .active {
    .icon {
      .icon {
        fill: ${theme.colors.primary} !important;
      }
      width: 40px;
      height: auto;
      margin-bottom: -4px;
    }
    span {
      display: inline;
    }
  }
`;
