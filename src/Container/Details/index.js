import React from "react";
import data from "./Data.json";
import "./style.css";

const Details = () => {
  return (
    <div className="details flex flex-col justify-center items-center">
      <h1 className="header sf-display-medium mb-8">{data.header}</h1>
      <div className="flex flex-col gap-8">
        <span className="sf-regular">
          {data.details} <code>{data.fontsize}</code> of{" "}
          <code>{data.pixelCount}</code> {data.pixel}.
        </span>

        <span className="sf-regular">{data.direction}</span>

        <div className="flex flex-col gap-2">
          <span className="sf-display-medium">{data.example}</span>
          <span className="sf-regular">
            {data.exampleDetails} <code>{data.onePx}</code> {data.represents}{" "}
            <code>{data.remCount}</code> {data.exampleDetailsSecond}{" "}
            <code>{data.oneRem}</code> {data.represents}{" "}
            <code>{data.pixelCount}</code>.
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="sf-display-medium">{data.emRemDiff}</span>
          <span className="sf-regular">
            {data.difference} <code>{data.fontsize}</code> {data.exception}{" "}
            <code>{data.fontsize}</code> {data.differenceSecond}
          </span>
          <span className="sf-regular">{data.remDetails}</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
