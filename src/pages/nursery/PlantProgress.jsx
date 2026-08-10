import React from "react";
import "../../Css/PlantProgress.css";

const plants = [
  {
    name: "લીમડો",
    english: "Neem",
    current: 2400,
    target: 3000,
    color: "green",
  },
  {
    name: "પીપળો",
    english: "Peepal",
    current: 850,
    target: 2000,
    color: "yellow",
    warning: "સ્ટોક ઓછો છે",
  },
  {
    name: "વડ",
    english: "Banyan",
    current: 1200,
    target: 1500,
    color: "green",
  },
  {
    name: "આસોપાલવ",
    english: "",
    current: 3100,
    target: 4000,
    color: "green",
  },
  {
    name: "તુલસી",
    english: "",
    current: 150,
    target: 1000,
    color: "red",
    warning: "વધુ છોડની જરૂર છે",
  },
];

const PlantProgress = () => {
  return (
    <div className="nursery-card">

      {/* Title */}
      <h2 className="nursery-title">
        નર્સરી સ્ટોક વિગત
      </h2>

      {/* Plant List */}
      <div className="plant-list">
        {plants.map((plant, index) => {
          const percentage =
            (plant.current / plant.target) * 100;

          return (
            <div className="plant-item" key={index}>

              {/* Name + Count */}
              <div className="plant-header">

                <div className="plant-name">
                  {plant.name}

                  {plant.english && (
                    <span> ({plant.english})</span>
                  )}
                </div>

                <div className="plant-count">
                  {plant.current.toLocaleString()} /{" "}
                  {plant.target.toLocaleString()}
                </div>

              </div>

              {/* Progress */}
              <div className="progress-bg">
                <div
                  className={`progress-fill ${plant.color}`}
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>

              {/* Warning */}
              {plant.warning && (
                <div className="warning-text">
                  {plant.warning}
                </div>
              )}

            </div>
          );
        })}
      </div>

      {/* Button */}
      <button className="details-btn">
        વધુ વિગતો જુઓ
      </button>

    </div>
  );
};

export default PlantProgress;