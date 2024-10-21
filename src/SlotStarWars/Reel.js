import React, { useEffect, useRef } from "react";
import Symbol from "./Symbol";

const Reel = ({ idx, initialSymbols, nextSymbols, onSpinEnd }) => {
  const reelRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (reelRef.current) {
      reelRef.current.style.top = "0";
      reelRef.current.style.filter = "blur(0)";
    }
  }, [initialSymbols]);

  const spin = () => {
    if (reelRef.current && animationRef.current) {
      const factor = 1 + Math.pow(idx / 2, 2);
      const duration = factor * 1000;

      animationRef.current.cancel();
      animationRef.current.play();

      setTimeout(() => {
        if (animationRef.current.playState !== "finished") {
          animationRef.current.finish();
        }
        onSpinEnd();
      }, duration);
    }
  };

  useEffect(() => {
    if (reelRef.current) {
      const factor = 1 + Math.pow(idx / 2, 2);
      const duration = factor * 1000;

      animationRef.current = reelRef.current.animate(
        [
          { top: 0, filter: "blur(0)" },
          { filter: "blur(2px)", offset: 0.5 },
          {
            top: `calc((${Math.floor(factor) * 10} / 3) * -100% - (${
              Math.floor(factor) * 10
            } * 3px))`,
            filter: "blur(0)",
          },
        ],
        {
          duration,
          easing: "ease-in-out",
        }
      );
      animationRef.current.cancel();
    }
  }, [idx]);

  useEffect(() => {
    if (nextSymbols) {
      spin();
    }
  }, [nextSymbols]);

  return (
    <div className="reel" ref={reelRef}>
      <div className="icons">
        {initialSymbols.map((symbol, index) => (
          <Symbol key={index} name={symbol} />
        ))}
      </div>
    </div>
  );
};

export default Reel;
