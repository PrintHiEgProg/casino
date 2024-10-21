import React, { useState, useEffect } from "react";
import Reel from "./Reel";
import Symbol from "./Symbol";

const Slot = () => {
  const [currentSymbols, setCurrentSymbols] = useState([
    ["death_star", "death_star", "death_star"],
    ["death_star", "death_star", "death_star"],
    ["death_star", "death_star", "death_star"],
    ["death_star", "death_star", "death_star"],
    ["death_star", "death_star", "death_star"],
  ]);

  const [nextSymbols, setNextSymbols] = useState([
    ["death_star", "death_star", "death_star"],
    ["death_star", "death_star", "death_star"],
    ["death_star", "death_star", "death_star"],
    ["death_star", "death_star", "death_star"],
    ["death_star", "death_star", "death_star"],
  ]);

  const [spinning, setSpinning] = useState(false);
  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    Symbol.preload();
  }, []);

  const spin = () => {
    setCurrentSymbols(nextSymbols);
    setNextSymbols([
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
    ]);
    setSpinning(true);
  };

  const onSpinEnd = () => {
    setSpinning(false);
    if (autoplay) {
      setTimeout(spin, 200);
    }
    if (checkForJackpot(nextSymbols)) {
      alert("ты выиграл!!!");
    }
  };

  const checkForJackpot = (symbols) => {
    for (let row = 0; row < symbols[0].length; row++) {
      const firstSymbol = symbols[0][row];
      let isJackpot = true;

      for (let reel = 1; reel < symbols.length; reel++) {
        if (symbols[reel][row] !== firstSymbol) {
          isJackpot = false;
          break;
        }
      }

      if (isJackpot) {
        return true;
      }
    }

    return false;
  };

  return (
    <div id="slot">
      <div id="reels">
        {currentSymbols.map((symbols, idx) => (
          <Reel
            key={idx}
            idx={idx}
            initialSymbols={symbols}
            nextSymbols={nextSymbols[idx]}
            onSpinEnd={onSpinEnd}
          />
        ))}
      </div>
      <div id="controls">
        <label className="autoplay">
          <input
            type="checkbox"
            name="autoplay"
            id="autoplay"
            checked={autoplay}
            onChange={(e) => setAutoplay(e.target.checked)}
          />
          Autoplay
        </label>
        <button type="button" id="spin" onClick={spin} disabled={spinning}>
          SPIN
        </button>
      </div>
    </div>
  );
};

export default Slot;
