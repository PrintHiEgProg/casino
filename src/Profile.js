import "./App.css";
import avatar from "./person.jpg"
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

function Profile({ newBalance, setNewBalance, firstName }) {
  const [isVisibleProfile, setIsVisibleProfile] = useState(false);
  const [balance, setBalance] = useState(0);
  const tg = window.Telegram.WebApp;
  const [photoAvatar, setPhotoAvatar] = tg.WebAppUser.photo_url
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisibleProfile(true);
    }, 300); // Задержка перед началом анимации

    return () => clearTimeout(timer);
  }, []);

  const { number } = useSpring({
    from: { number: balance },
    number: newBalance,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  useEffect(() => {
    if (photoAvatar) {
    } else {
      setPhotoAvatar(avatar);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNewBalance(newBalance);
    });

    return () => clearTimeout(timer);
  }, []);

  const ReplenishmentOfTheBalance = () => {
    tg.openTelegramLink("https://t.me/ScroogeCasino777_bot?start=replenishmentofthebalance");
  };

  const WithDrawalOfFunds = () => {
    tg.openTelegramLink("https://t.me/ScroogeCasino777_bot?start=withdrawaloffunds");
  };

  return (
    <div className="Profile">
      {isVisibleProfile && (
        <div
          className={`profile-box ${
            isVisibleProfile ? "slide-in-from-left" : ""
          }`}
        >
          <div className="profile-box-helper">
            <img
              className="profile-avatar"
              src={photoAvatar}
              alt="profile-avatar"
            />
            <div className="profile-text">
              {firstName}
              <div className="profile-id">ID: 123456789</div>
            </div>
            <div className="profile-balance-text">
              Ваш баланс:
              <span className="profile-balance-text-helper">
                <animated.div>
                  {number.to((val) => val.toFixed(2))}
                </animated.div>
                $
              </span>
            </div>
            <div
              className="profile-balance-button profile-balance-button-popolnit"
              onClick={ReplenishmentOfTheBalance}
            >
              <div className="profile-balance-button-text">Пополнить</div>
            </div>
            <div
              className="profile-balance-button profile-balance-button-vivisti"
              onClick={WithDrawalOfFunds}
            >
              <div className="profile-balance-button-text">Вывести</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
