import React from "react";
import "./style.css";
import Logo from "../../../assests/userlogo.png";
import CoverBackground from "../../../assests/cover.png";
import DashboardHeader from "../../DashboardHeader/DashboardHeader";
import {
  Cake,
  Shield,
  Gem,
  MapPin,
  Ruler,
  Weight,
  BookUser,
} from "lucide-react";
const UserDetail = () => {
  return (
    <div className="user-detail-container">
      <DashboardHeader />
      <div className="user-detail-row">
        <div className="user-profile-card">
          <div className="user-profile-container">
            <div className="user-profile-cover">
              <img src={CoverBackground} alt="" />
            </div>
            <div className="user-profile-logo">
              <img src={Logo} alt="" />
            </div>
            <div className="user-profile-text">
              <span>Marilyn Levin, 25</span>
              <p>Los Angeles</p>
            </div>
          </div>
        </div>

        <div className="user-detail-box">
          <div className="user-about-container">
            <div className="user-about-heading">
              <span>About Marilyn</span>
            </div>
            <div className="user-about-content">
              <div className="user-info-box">
                <Cake color="#172542" />
                <div className="info-box-text">
                  <span>Date of Birth</span>
                  <p>01 Jun 1999</p>
                </div>
              </div>

              <div className="user-info-box">
                <Shield color="#172542" />
                <div className="info-box-text">
                  <span>Gender</span>
                  <p>Female</p>
                </div>
              </div>

              <div className="user-info-box">
                <Gem color="#172542" />
                <div className="info-box-text">
                  <span>Marital Status</span>
                  <p>Single</p>
                </div>
              </div>

              <div className="user-info-box">
                <Ruler color="#172542" />
                <div className="info-box-text">
                  <span>Height</span>
                  <p>167 cm</p>
                </div>
              </div>

              <div className="user-info-box">
                <Weight color="#172542" />
                <div className="info-box-text">
                  <span>Weight</span>
                  <p>3 lbs</p>
                </div>
              </div>

              <div className="user-info-box">
                <MapPin color="#172542" />
                <div className="info-box-text">
                  <span>Location</span>
                  <p>Los Angeles</p>
                </div>
              </div>

              <div className="user-bio-box">
                <BookUser color="#172542" size={70} />
                <div className="info-box-text">
                  <span>Bio</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
