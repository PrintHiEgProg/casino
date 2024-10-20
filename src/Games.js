import "./App.css";
import avatar from "./person.jpg";
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

function Games() {
    const [isVisible, setIsVisible] = useState(true);
    const [isVisibleCards, setIsVisibleCards] = useState(false)
    const [isVisibleSlots, setIsVisibleSlots] = useState(false);
    const [isVisibleRullete, setIsVisibleRullete] = useState(false);
    const [isVisibleMoreGames, setIsVisibleMoreGames] = useState(false);
    
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000); // Задержка перед началом анимации

      return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisibleCards(true);
      }, 300); // Задержка перед началом анимации

      return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisibleSlots(true);
      }, 500); // Задержка перед началом анимации

      return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisibleRullete(true);
      }, 700); // Задержка перед началом анимации

      return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisibleMoreGames(true);
      }, 900); // Задержка перед началом анимации

      return () => clearTimeout(timer);
    }, []);
  return (
    <div className="Games">
      <div className={`games-page-text ${isVisible ? "fade-out" : ""}`}>
        Игры
      </div>
      {isVisibleCards && (
        <div
          className={`game-page-box ${
            isVisibleCards ? "slide-in-from-left" : ""
          }`}
        >
          <div class="game-page-box-images cards-icon"></div>
          <div class="game-page-box-helper">
            <div class="game-page-box-text">Карточные игры</div>
            <div class="game-page-box-description">
              Страстные дуэли, тайные комбинации и непредсказуемые повороты!
            </div>
          </div>
        </div>
      )}

      {isVisibleSlots && (
        <div
          className={`game-page-box ${
            isVisibleSlots ? "slide-in-from-left" : ""
          }`}
        >
          <div class="game-page-box-images slots-icon"></div>
          <div class="game-page-box-helper">
            <div class="game-page-box-text">Слоты</div>
            <div class="game-page-box-description">
              Быстрые вращения, яркие символы и непредсказуемые выигрыши!
            </div>
          </div>
        </div>
      )}

      {isVisibleRullete && (
        <div
          className={`game-page-box ${
            isVisibleRullete ? "slide-in-from-left" : ""
          }`}
        >
          <div class="game-page-box-images rullete-icon"></div>
          <div class="game-page-box-helper">
            <div class="game-page-box-text">Рулетки</div>
            <div class="game-page-box-description">
              Вращающееся колесо, непредсказуемые числа и взрыв эмоций!
            </div>
          </div>
        </div>
      )}

      {isVisibleMoreGames && (
        <div
          className={`game-page-box ${
            isVisibleMoreGames ? "slide-in-from-left" : ""
          }`}
        >
          <div class="game-page-box-images more-games-icon"></div>
          <div class="game-page-box-helper">
            <div class="game-page-box-text">Другие игры</div>
            <div class="game-page-box-description">
              Вас ждёт множество других захватывающих игр!
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Games;
