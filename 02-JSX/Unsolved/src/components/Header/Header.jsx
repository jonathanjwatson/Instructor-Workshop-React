import React from "react";

const Header = () => {
  return (
    <header>
      <nav class="container">
        <h1>
          <button>John Doe</button>
        </h1>
        <ul>
          <li>
            <button>Resume</button>
          </li>
          <li>
            <button>GitHub</button>
          </li>
          <li>
            <button>LinkedIn</button>
          </li>
          <li>
            <button>Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
