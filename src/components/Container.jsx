import React from "react";
import "./styles/Container.scss";
import UserRow from "./UserRow";

export default function Container() {
  const usr1 = {
    userId: 11111,
    username: "Charvie Sharma",
    email: "charviesharma.cs@gmail.com",
    stepsWalked: 2547,
    stepsTarget: 4000,
    performedDate: "October 15 2022",
    scheduledDate: "October 22 2022",
    feedback: true,
    calorieIntake: 2547,
    calorieTarget: 2500,
    proteinConsumed: 45,
    proteinTarget: 70,
    carbConsumed: 50,
    carbTarget: 70,
    fatConsumed: 30,
    fatTarget: 70,
  };

  const usr2 = {
    userId: 22222,
    username: "Charvie Sharma",
    email: "charviesharma.cs@gmail.com",
    stepsWalked: 2547,
    stepsTarget: 4000,
    performedDate: "October 15 2022",
    scheduledDate: "October 17 2022",
    feedback: true,
    calorieIntake: 2547,
    calorieTarget: 2500,
    proteinConsumed: 45,
    proteinTarget: 70,
    carbConsumed: 50,
    carbTarget: 70,
    fatConsumed: 30,
    fatTarget: 70,
  };

  const usr3 = {
    userId: 33333,
    username: "Charvie Sharma",
    email: "charviesharma.cs@gmail.com",
    stepsWalked: 2547,
    stepsTarget: 4000,
    performedDate: "October 15 2022",
    scheduledDate: "October 22 2022",
    feedback: false,
    calorieIntake: 2547,
    calorieTarget: 2500,
    proteinConsumed: 45,
    proteinTarget: 70,
    carbConsumed: 50,
    carbTarget: 70,
    fatConsumed: 30,
    fatTarget: 70,
  };

  return (
    <React.Fragment>
      <div className="container">
        <header className="header">
          <figure className="steps-container">
            <img
              className="steps-img"
              src={require("../assets/steps.png")}
              alt=""
            />
            <figcaption className="steps-txt">Steps</figcaption>
          </figure>

          <figure className="workout-container">
            <img
              className="workout-img"
              src={require("../assets/gym.png")}
              alt=""
            />
            <figcaption className="workout-txt">Workout</figcaption>
          </figure>

          <figure className="nutri-container">
            <img
              className="nutri-img"
              src={require("../assets/nutrition.png")}
              alt=""
            />
            <figcaption className="nutri-txt">Nutrition</figcaption>
          </figure>
        </header>
        <div className="userrow-container">
          <UserRow data={usr1} />
          <UserRow data={usr2} />
          <UserRow data={usr3} />
        </div>
      </div>
    </React.Fragment>
  );
}
