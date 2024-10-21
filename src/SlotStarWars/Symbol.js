import React, { useEffect, useState } from "react";

const symbols = [
  "at_at",
  "c3po",
  "darth_vader",
  "death_star",
  "falcon",
  "r2d2",
  "stormtrooper",
  "tie_ln",
  "yoda",
];

const cache = {};

const Symbol = ({ name }) => {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    if (cache[name]) {
      setImgSrc(cache[name]);
    } else {
      const img = new Image();
      img.src = require(`../assets/symbols/${name}.svg`).default;
      img.onload = () => {
        cache[name] = img.src;
        setImgSrc(img.src);
      };
    }
  }, [name]);

  return <img src={imgSrc} alt={name} />;
};

Symbol.preload = () => {
  symbols.forEach((symbol) => new Symbol({ name: symbol }));
};

Symbol.random = () => {
  return symbols[Math.floor(Math.random() * symbols.length)];
};

export default Symbol;
