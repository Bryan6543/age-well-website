import React from "react";

const Navbar = () => {
  return (
    <div className="nav_container">
      {/* logo */}
      <div className="nav_logo_container">
        <h2>Age Well</h2>
        <img className="" src="/agewell.svg" alt="Age Well Logo" />
      </div>

      {/* navbar links */}
      <div>
        <ul className="nav_links">
          <li>Features</li>
          <li>Demo</li>
          <li>Survey Results</li>
          <li>About Us</li>
        </ul>
      </div>
      {/* Button */}
      <div>
        <button className="nav_contact_us">
          View Docs.
        </button>
      </div>
    </div>
  );
};

export default Navbar;
