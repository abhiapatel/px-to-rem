import React, { useEffect, useState } from "react";
import ToggleSwap from "../../icons/ToggleSwap";
import "./style.css";

function Converter() {
  const [px, setPX] = useState("");
  const [rem, setREM] = useState("");
  const [isREM, setIsREM] = useState(false);
  const [title, setTitle] = useState("PX to REM Converter");

  useEffect(() => {
    if (isREM) {
      setTitle("REM to PX Converter");
    } else {
      setTitle("PX to REM Converter");
    }
  }, [isREM]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const toRem = (pixel) => {
    const rem = 0.0625 * pixel;
    return rem;
  };

  const toPX = (rem) => {
    const px = rem * 16;
    return Math.round(px);
  };

  const onPxChange = (e) => {
    const {
      target: { value },
    } = e;
    const pxToREM = toRem(Number(value));
    setPX(value);
    setREM(pxToREM);
  };

  const onRemChange = (e) => {
    const {
      target: { value },
    } = e;
    const remToPX = toPX(Number(value));
    setPX(remToPX);
    setREM(value);
  };

  const handleFocus = (e) => {
    e.target.select()
  };

  const changeConverts = () => {
    setIsREM(!isREM);
  };

  return (
    <div className="main flex flex-col justify-center items-center">
      <h1 className="header sf-display-medium">{title}</h1>
      <div className="converter flex flex-col justify-between gap-8 sf-regular">
        {/* PX */}
        {isREM ? (
          <div className="flex flex-col items-center justify-center">
            <label htmlFor="rem" style={{ color: "#64ffda" }}>
              REM
            </label>
            <div className="relative">
              <input
                type="text"
                value={rem}
                id="rem"
                name="rem"
                autoComplete="off"
                onChange={onRemChange}
                onFocus={handleFocus}
              />
              <abbr className="sf-mono unit">rem</abbr>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <label htmlFor="pixels" style={{ color: "#64ffda" }}>
              Pixels
            </label>
            <div className="relative">
              <input
                type="text"
                id="pixels"
                value={px}
                name="pixels"
                autoComplete="off"
                onChange={onPxChange}
                onFocus={handleFocus}
              />
              <abbr className="sf-mono unit">px</abbr>
            </div>
          </div>
        )}

        <div
          className="toggle-swap flex cursor-pointer"
          title="Swap"
          onClick={changeConverts}
        >
          <ToggleSwap />
        </div>

        {isREM ? (
          <div className="flex flex-col items-center justify-center">
            <label htmlFor="pixels" style={{ color: "#64ffda" }}>
              Pixels
            </label>
            <div className="relative">
              <input
                type="text"
                id="pixels"
                value={px}
                name="pixels"
                onChange={onPxChange}
                autoComplete="off"
                onFocus={handleFocus}
                className="rem-input"
              />
              <abbr className="sf-mono unit">px</abbr>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <label htmlFor="rem" style={{ color: "#64ffda" }}>
              REM
            </label>
            <div className="relative">
              <input
                type="text"
                value={rem}
                id="rem"
                name="rem"
                onChange={onRemChange}
                autoComplete="off"
                className="rem-input"
                onFocus={handleFocus}
              />
              <abbr className="sf-mono unit">rem</abbr>
            </div>
          </div>
        )}
        {/* REM */}
      </div>
    </div>
  );
}

export default Converter;
