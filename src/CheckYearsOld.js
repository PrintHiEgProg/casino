import "./App.css";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

function CheckYearsOld() {
  const tg = window.Telegram.WebApp;
  const [isChecked, setIsChecked] = useState(false);
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  // Функция, которая будет вызываться при изменении значения checkbox
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleClick = (event) => {
    if (isChecked) {
      localStorage.setItem("checkYearsOld", true);
      window.location.reload();
    } else {
      setMessage("Ошибка: Вы не поставили галочку");
    }
  };
    
    const handleLeave = () => {
      tg.close()
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("");
    }, 2000);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <div className="CheckYearsOld">
      <div className="center-container">
        <div className="window-popup">
          <div className="window-popup-helper">
            <div className="window-popup-text">Вам есть 18 лет?</div>
            <div className="window-popup-error">{message}</div>
            <div className="window-popup-check-box">
              <input
                className="window-popup-check-box-checkbox"
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              ></input>
              <div className="window-popup-check-box-text">
                Нажимая на кнопку вы соглашаетесь с
                <span className="window-popup-check-box-text-helper">
                  {" "}
                  политикой конфиденциальности{" "}
                </span>{" "}
                и подтверждаете что вам есть 18 лет
              </div>
            </div>
            <div className="window-popup-box">
              <div
                className="window-popup-box-button leave-btn"
                onClick={handleLeave}
              >
                <div className="window-popup-box-button-text">Выйти</div>
              </div>
              <div
                className="window-popup-box-button yes-btn"
                onClick={handleClick}
              >
                <div className="window-popup-box-button-text">Да</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckYearsOld;
