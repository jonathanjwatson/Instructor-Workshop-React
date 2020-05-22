import React from "react";
import "./nav.css";

// TODO: Add Props to argument in function
function Nav({ resume, github, linkedin, handleLink }) {
  const handleScroll = (y) => {
    window.scroll({ top: y, left: 0, behavior: "smooth" });
  };

  return (
    <nav className="container">
      {/* TODO: Add handleScroll to John Doe (HINT: handleScroll(0) will take you to the top of the page) */}
      <h1>
        <button onClick={handleScroll(0)}>John Doe</button>
      </h1>
      <ul>
        {/* TODO: Add handleLink through props as a onClick event for each button below (HINT: handleLink("https://google.com/") */}
        <li>
          <button onClick={handleLink(resume)}>Resume</button>
        </li>
        <li>
          <button onClick={handleLink(github)}>GitHub</button>
        </li>
        <li>
          <button onClick={handleLink(linkedin)}>LinkedIn</button>
        </li>
        {/* TODO: Add handleScroll to Contact similar to how it was done for John Doe (HINT: document.body.scrollHeight will take you to the bottom of the document) */}
        <li>
          <button>Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
