import React from "react";
import { Link, NavLink } from "react-router-dom";
import ToggleSwap from "../../icons/ToggleSwap";
import "./style.css";

const Nav = () => {
  const navLinks = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  const Logo = (
    <div className="logo" tabIndex="-1">
      <Link to="/" aria-label="home">
        <ToggleSwap />
      </Link>
    </div>
  );

  return (
    <div className="navHeader flex justify-between top-0">
      <div className="styledNav flex justify-between items-center sf-mono">
        {Logo}

        <div className="styledLink flex items-center">
          <ol className="gap-4">
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <li className="cursor-pointer" key={i}>
                  <NavLink to={url}>{name}</NavLink>
                </li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Nav;
