
import React from "react";
import Button from "../button/Button";
import Logo from "../../assets/netflix.svg"
import profile from "../../assets/profile.png";
import { Link, useNavigate,  } from "react-router-dom";
import "./navbar.css"

const Navbar = ({ isUser }) => {
  const logout = () => {
    localStorage.removeItem("user");
    logoutNav("/");
  };

  const navigate = useNavigate();
  const logoutNav = useNavigate();
  return (
    <div className="navbar">
      <div className="logo-img">
        <img src={Logo} alt="netflix logo" />

        {isUser && (
          <div className="nav">
            <ul>
              <Link to="/home" className="link">
                Home
              </Link>
              <Link to="/mylist" className="link">
                My List
              </Link>
              <Link to="/search" className="link">
                Search
              </Link>
            </ul>
          </div>
        )}
      </div>

      {isUser ? (
        <div className="log-container">
          <img src={profile} alt="" width={30} height={30} />
          <Button
            size="medium"
            rounded="rounded"
            color="white"
            bg="bg-1"
            value="Log Out"
            onclick={() => logout()}
          />
        </div>
      ) : (
        <div className="navbar-topright">
          <div className="language-select">
            <select name="language" id="language">
              <option value="english">English</option>
              <option value="hindi">हिंदी</option>
            </select>
          </div>

          <Button
            size="small"
            rounded="rounded"
            color="white"
            bg="bg-1"
            value="Sign In"
            onclick={() => navigate("signin")}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
