import "./App.css";
import React, { useEffect, useState } from "react";
import solitaire from "./solitaire.jpg"
import starWarsSlots from "./star-wars-slots.png";
import rulleteClassic from "./rullete-classic.jpeg"
import { useSpring, animated } from "react-spring";
import { useNavigate } from "react-router-dom";
import CheckYearsOld from "./CheckYearsOld.js";

function Main({ newBalance, setNewBalance, firstName, UserId }) {
  const tg = window.Telegram.WebApp;
  const [isVisible, setIsVisible] = useState(true);
  const [isVisibleBalance, setIsVisibleBalance] = useState(false);
  const [isVisibleGames, setIsVisibleGames] = useState(false);
  const [isVisibleGamesBox, setIsVisibleGamesBox] = useState(false);
  const [isVisibleMoreGames, setIsVisibleMoreGames] = useState(false);
  const [checkYearsOld, setCheckYearsOld] = useState(() => {
    const savedcheckYearsOld = localStorage.getItem("checkYearsOld");
    return savedcheckYearsOld !== null ? JSON.parse(savedcheckYearsOld) : false;
  });
  const navigate = useNavigate();
  //const [balance, setBalance] = useState(3724.24)

  const [balance, setBalance] = useState(0);
  const [lastGame, setLastGame] = useState(false);
  const [lastGameName, setLastGameName] = useState(false);
  const [lastGamePhoto, setLastGamePhoto] = useState(false);
  const [lastGameURL, setLastGameURL] = useState(false);

  useEffect(() => {
    if (
      !localStorage.getItem("lastGameName") ||
      !localStorage.getItem("lastGamePhoto") ||
      !localStorage.getItem("lastGameURL")
    ) {
      console.log(checkYearsOld);
      console.log(!localStorage.getItem("checkYearsOld"));
      setLastGame(false);
    }
  }, []);

  useEffect(() => {
    // Сохраняем значение count в localStorage при его изменении
    localStorage.setItem("checkYearsOld", checkYearsOld);
  }, [checkYearsOld]); // Зависимость от переменных, чтобы эффект срабатывал при их изменении

  const { number } = useSpring({
    from: { number: balance },
    number: newBalance,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setNewBalance(newBalance);
    });

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Задержка перед началом анимации

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisibleBalance(true);
    }, 300); // Задержка перед началом анимации

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisibleGames(true);
    }, 600); // Задержка перед началом анимации

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisibleGamesBox(true);
    }, 700); // Задержка перед началом анимации

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Задержка перед появлением кнопки
    const timeout = setTimeout(() => {
      setIsVisibleMoreGames(true);
    }, 10); // 1000 мс = 1 секунда

    return () => clearTimeout(timeout);
  }, []);

  const ReplenishmentOfTheBalance = () => {
    if (checkYearsOld) {
        tg.openTelegramLink("https://t.me/ScroogeCasino777_bot?start=replenishmentofthebalance")
        tg.close()
    }
  };

  const handleGamesClick = () => {
    if (checkYearsOld) {
      navigate("/games");
    }
  };

  const handleGoGame = () => {
    navigate(localStorage.getItem("lastGameURL"));
  };
    
    const GoToSlotStarWars = () => {
      if (checkYearsOld) {
        navigate("/games/slots/star-wars");
      }
  }

  return (
    <div className="Main">
      {!checkYearsOld && (
        <CheckYearsOld
          checkYearsOld={checkYearsOld}
          setCheckYearsOld={setCheckYearsOld}
        />
      )}
      <div className={`${!checkYearsOld ? "blur" : ""}`}>
        <div className={`hello-user ${isVisible ? "fade-out" : ""}`}>
          Добрый день, {firstName}!
        </div>
        {isVisibleBalance && (
          <div
            className={`balance-box ${
              isVisibleBalance ? "slide-in-from-left" : ""
            }`}
          >
            <div className="balance-box-helper">
              <div className="balance-text">Ваш баланс:</div>
              <div
                className="balance-button"
                onClick={ReplenishmentOfTheBalance}
              >
                <div className="balance-button-text">Пополнить</div>
              </div>
              <div className="balance">
                <animated.div>
                  {number.to((val) => val.toFixed(2))}
                </animated.div>
                $
              </div>
            </div>
          </div>
        )}
        <div>
          {isVisibleGames && (
            <div
              className={`games-text ${
                isVisibleGames ? "slide-in-from-left" : ""
              }`}
            >
              Игры
            </div>
          )}
          {isVisibleGames && !lastGame && (
            <div
              className={`games-box ${
                isVisibleGames ? "slide-in-from-left" : ""
              }`}
            >
              <div className="games-box-helper">
                <div className="games-box-text">Попробуйте эти игры:</div>
                <div className="games-box-flex">
                  <div className="games-box-flex-box">
                    <div className="games-box-flex-box-image-item">
                      <img
                        className="games-box-flex-box-image-item-image"
                        src={solitaire}
                        alt="Картинка 1"
                      />
                      <div className="games-box-flex-box-image-item-description">
                        Покер Classic
                      </div>
                    </div>
                                      <div className="games-box-flex-box-image-item" onClick={GoToSlotStarWars}>
                      <img
                        className="games-box-flex-box-image-item-image"
                        src={starWarsSlots}
                        alt="Картинка 2"
                      />
                      <div className="games-box-flex-box-image-item-description">
                        Слоты Star Wars
                      </div>
                    </div>
                    <div class="games-box-flex-box-image-item">
                      <img
                        className="games-box-flex-box-image-item-image"
                        src={rulleteClassic}
                        alt="Картинка 3"
                      />
                      <div className="games-box-flex-box-image-item-description">
                        Рулетка Classic
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isVisibleGamesBox && lastGame && (
            <div
              className={`games-box ${
                isVisibleGamesBox ? "slide-in-from-left" : ""
              }`}
            >
              <div className="games-box-helper">
                <div className="games-box-text">Продолжите дальше:</div>
                <img
                  className="games-box-images"
                  src={localStorage.getItem("lastGamePhoto")}
                  alt="game-icon"
                />
                <div className="games-box-name">
                  {localStorage.getItem("lastGameName")}
                </div>
                <div className="games-box-button" onClick={handleGoGame}>
                  <div className="games-box-button-text">Играть</div>
                </div>
              </div>
            </div>
          )}
          <div
            className={`more-games-button ${isVisible ? "visible" : ""}`}
            onClick={handleGamesClick}
          >
            <div className="more-games-button-text">Другие игры</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
