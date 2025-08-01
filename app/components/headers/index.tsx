import { NavLink } from "react-router";

import "./style.css";
import logImage from "~/assets/wordmark-tagline-black.png";

export default function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <div className="header-inner">
          <NavLink to="/" className="header-logo">
            <img
              style={{ height: 36, display: "flex", marginTop: "-12px" }}
              src={logImage}
              alt="wordmark"
            />
          </NavLink>
          <a href="https://booking.flutterpads.com/signup.php" className="header-btn header-btn-hide"><span>List Your Property</span></a>
        </div>
      </div>
    </header>
  );
}
