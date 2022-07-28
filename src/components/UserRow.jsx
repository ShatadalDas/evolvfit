import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PieChart } from "react-minimal-pie-chart";
import "./styles/UserRow.scss";
import RedirectButton from "./RedirectButton";

export default function UserRow(props) {
  const [stepTarget, setStepTarget] = useState(props.data.stepsTarget);
  const [calTarget, setCalTarget] = useState(props.data.calorieTarget);

  const performed = new Date(props.data.performedDate);
  const scheduled = new Date(props.data.scheduledDate);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const performedMonth = months[performed.getMonth()];
  const performedDate = performed.getDate();

  const scheduledMonth = months[scheduled.getMonth()];
  const scheduledDate = scheduled.getDate();

  const fullScheduledDate =
    scheduledDate + " " + scheduledMonth + " " + scheduled.getFullYear();
  const current = new Date();
  const currentDate = current.getDate();
  const currentMonth = months[current.getMonth()];
  const currentYear = current.getFullYear();
  const fullCurrentDate = currentDate + " " + currentMonth + " " + currentYear;
  console.log(fullScheduledDate);
  console.log(fullCurrentDate);
  useEffect(() => {
    if (fullScheduledDate == fullCurrentDate) {
      document.querySelector(".s-date").style =
        "background-color: var(--alert-clr);";
      console.log("same");
    }
  });

  function width(a, b) {
    let ans = (a / b) * 100;
    return ans;
  }

  return (
    <React.Fragment>
      <Router>
        <div className="user-row">
          <div className="profile">
            <img
              className="img"
              src={require("../assets/profile.png")}
              alt=""
            />
            <blockquote className="text-wrapper">
              <h1 className="username">{props.data.username}</h1>
              <h2 className="email">{props.data.email}</h2>
            </blockquote>
          </div>
          <div className="progress">
            <div className="progress-bar">
              <CircularProgressbarWithChildren
                className="circle"
                value={props.data.stepsWalked}
                maxValue={stepTarget}
              >
                <div className="text">
                  <p className="steps-count">{props.data.stepsWalked}</p>
                  <p className="walked">walked</p>
                </div>
              </CircularProgressbarWithChildren>
            </div>
            <div className="target-container">
              <div
                className="plus-minus plus"
                onClick={() => {
                  setStepTarget(stepTarget + 500);
                }}
              >
                +
              </div>
              <div className="targetValue">
                {stepTarget >= 1000 ? `${stepTarget / 1000}k` : stepTarget}
                <p className="target">target</p>
              </div>

              <div
                className="plus-minus minus"
                onClick={() => {
                  if (stepTarget - 500 >= 0) setStepTarget(stepTarget - 500);
                }}
              >
                --
              </div>
            </div>
          </div>
          <div className="workout">
            <div className="left-section">
              <div className="p-date">
                <img src={require("../assets/performDate.png")} alt="" />
                <span>{performedDate + " " + performedMonth}</span>
              </div>
              <div className="s-date">
                <img src={require("../assets/schedule.png")} alt="" />
                <div>{scheduledDate + " " + scheduledMonth}</div>
              </div>
            </div>
            <RedirectButton
              isWorkOut={true}
              data={props.data}
              api={props.data.userId + "/workout"}
            />
          </div>

          <div className="nutrition">
            <div className="pie-chart">
              <div className="pie">
                <PieChart
                  data={[
                    {
                      value: props.data.carbConsumed,
                      color: "var(--carbs-clr)",
                    },
                    { value: props.data.fatConsumed, color: "var(--fat-clr)" },
                    {
                      value: props.data.proteinConsumed,
                      color: "var(--protein-clr)",
                    },
                  ]}
                  lineWidth={22}
                />
              </div>
              <div className="text">
                <p className="cal-val">{props.data.calorieIntake}</p>
                <p className="cal">calories</p>
              </div>

              <div className="stats">
                <div className="pointer"></div>
                <div className="box">
                  <div className="row protein">
                    <div className="sub-row">
                      <p>PROTEIN</p>
                      <div className="ptarget">{props.data.proteinTarget}g</div>
                    </div>
                    <div className="progress">
                      <div
                        className="bar bar1"
                        style={{
                          width:
                            width(
                              props.data.proteinConsumed,
                              props.data.proteinTarget
                            ) + "%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="row fat">
                    <div className="sub-row">
                      <p>FATS</p>
                      <div className="ftarget">{props.data.fatTarget}g</div>
                    </div>
                    <div className="progress">
                      <div
                        className="bar bar2"
                        style={{
                          width:
                            width(
                              props.data.fatConsumed,
                              props.data.fatTarget
                            ) + "%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="row carb">
                    <div className="sub-row">
                      <p>CARBS</p>
                      <div className="ctarget">{props.data.carbTarget}g</div>
                    </div>
                    <div className="progress">
                      <div
                        className="bar bar3"
                        style={{
                          width:
                            width(
                              props.data.carbConsumed,
                              props.data.carbTarget
                            ) + "%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="target-container">
              <div
                className="plus-minus plus"
                onClick={() => {
                  setCalTarget(calTarget + 100);
                }}
              >
                +
              </div>
              <div className="targetValue">
                {calTarget >= 1000 ? `${calTarget / 1000}k` : calTarget}
                <p className="target">target</p>
              </div>

              <div
                className="plus-minus minus"
                onClick={() => {
                  if (calTarget - 100 >= 0) setCalTarget(calTarget - 100);
                }}
              >
                --
              </div>
            </div>
            <RedirectButton
              isWorkOut={false}
              data={props.data}
              api={props.data.userId + "/nutrition"}
            />
          </div>

          <div className="bell">
            <img src={require("../assets/bell.png")} alt="" />
          </div>
        </div>
      </Router>
    </React.Fragment>
  );
}
