import React from "react";
import { Link } from "react-router-dom";

export default function Header({ back }) {
  return (
    <header className="header">
      <div>
        {back && (
          <Link to="/">
            <svg
              className="backArrow"
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              viewBox="0 -960 960 960"
              width="100%"
              fill="white"
            >
              <path d="M480-157.37 157.37-480 480-802.63l47.978 47.739-240.586 240.826H802.63v68.13H287.392l240.586 240.587L480-157.37Z" />
            </svg>
          </Link>
        )}

        <h1>
          <Link className="coinbox-title" to="/">
            <img
              className="coinbox-logo"
              src="https://i.imgur.com/emfg7ZE.png"
            ></img>
            CoinBox
          </Link>
        </h1>
      </div>
    </header>
  );
}
