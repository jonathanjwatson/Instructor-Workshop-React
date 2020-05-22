import React from "react";
import "./card.css";

// TODO: Add props to Card function as an argument
function Card({ title, github, deployed, desc, handleLink }) {
  return (
    <section className="card">
      {/* TODO: Add the link to the href attribute through the use of props */}
      <a href="/">
        {/* TODO: Add the project title through the use of props */}
        <h5>{title}</h5>
        <img src="https://via.placeholder.com/300" alt="placeholder" />
      </a>
      {/* TODO: Add the project description through the use of props */}
      <p>{desc}</p>
      <ul>
        {/* TODO: Add props for handleClick for each button and provide each corresponding link as an argument */}
        <li>
          <button
            className="btn-primary"
            onClick={() => {
              handleLink(deployed);
            }}
          >
            Deployed
          </button>
        </li>
        <li>
          <button className="btn-primary" onClick={() => handleLink(github)}>
            GitHub
          </button>
        </li>
      </ul>
    </section>
  );
}

export default Card;
