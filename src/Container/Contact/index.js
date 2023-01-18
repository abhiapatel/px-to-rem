import React from "react";
import Github from "../../icons/Github";
import Mail from "../../icons/Mail";
import Data from "./Data.json";
import "./style.css";

export const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <h1 className="header sf-display-medium">{Data.header}</h1>

      <div className="flex flex-col gap-8">
        {Data.devs.map((dev, index) => (
          <div className="flex items-center" key={index}>
            <div className="contact-seperator flex flex-col justify-center items-center gap-4">
              <a className="cursor-pointer" href={dev.github} target="_blank">
                <Github />
              </a>

              <a
                className="cursor-pointer"
                href={`mailto:${dev.email}`}
                target="_blank"
              >
                <Mail />
              </a>
            </div>
            <code>{dev.name}</code>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
