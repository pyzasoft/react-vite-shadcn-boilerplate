import { css } from "@emotion/react";
import ProfilePic from "../assets/icons/crested-helmet.svg";
import TicketPic from "../assets/icons/ticket.svg";

const TopNavBar = () => {
  return (
    <div
      className="d-flex flex-row justify-content-between align-items-center px-3"
      css={topNavBarStyle}
    >
      <div className="profile-pic-wrapper">
        <div className="profile-pic">
          <ProfilePic />
        </div>
      </div>
      <div className="ticket-wrapper">
        <div className="ticket-bar-wrapper d-flex flex-row justify-content-around">
          <div className="ticket-pic">
            <TicketPic />
          </div>
          <div className="value">
            <span>
              <small>
                <b>100</b>
              </small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;

const topNavBarStyle = css`
  background: #0e0b19c7;
  position: fixed;
  height: 3.5rem;
  z-index: 2;
  width: 100%;
  top: 0;
  .profile-pic-wrapper {
    border-radius: 50%;
    padding: 5px;
    background: #4a1077;
    outline: 1px solid #f4f4f440;
    box-shadow: inset 3px -2px 8px 0px #ff006a9e;
    .profile-pic {
      width: 30px;
      height: auto;
      svg {
        .icon {
          /* fill: #ffa326 !important; */
        }
      }
    }
  }
  .ticket-wrapper {
    width: 80px;
    border-radius: 15px;
    padding: 5px;
    /* background: #4a1077; */
    .ticket-pic {
      width: 25px;
      svg {
        .icon {
          fill: #ffa326 !important;
        }
      }
    }
    .value {
      color: #f4f4f4;
    }
  }
`;
