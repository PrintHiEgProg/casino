import "./App.css";
import avatar from "./person.jpg"
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import axios from "axios";

function Profile({ firstName }) {
    const [isVisibleProfile, setIsVisibleProfile] = useState(false);
    const [balance, setBalance] = useState(0)
    const [newBalance, setNewBalance] = useState();
    const [photoAvatar, setPhotoAvatar] = avatar;
    const tg = window.Telegram.WebApp;
     const userId = tg.initDataUnsafe.user.id;
  
    
    useEffect(() => {
      const fetchUserBalance = async () => {
        try {
          const response = await axios.get(
            `https://printhiegprog-casino-server-fa31.twc1.net/api/get-balance/${userId}`
          );
            setNewBalance(response.balance);
            console.log(newBalance)
        } catch (err) {}
      };
    }, []);

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
        //setPhotoAvatar(tg.initDataUnsafe.user.photo_url);
    } else {
      setPhotoAvatar(avatar);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNewBalance(newBalance);
    });

    return () => clearTimeout(timer);
  }, [newBalance]);

  const ReplenishmentOfTheBalance = () => {
      tg.openTelegramLink("https://t.me/ScroogeCasino777_bot?start=replenishmentofthebalance");
      tg.close()
  };

  const WithDrawalOfFunds = () => {
      tg.openTelegramLink("https://t.me/ScroogeCasino777_bot?start=withdrawaloffunds");
      tg.close()
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
              <div className="profile-id">ID: {userId}</div>
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
