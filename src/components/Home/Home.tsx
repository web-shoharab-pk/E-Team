import { faClipboard, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "./Home.css";

const percentage = 75;

const teamDetails = [
  {
    name: "Person one",
  },
  {
    name: "Person Two",
  },
  {
    name: "Person Three",
  },
  {
    name: "Person Four",
  },
  {
    name: "Person five",
  },
];

const recentTargets = [
  {
    name: "target one",
  },
  {
    name: "target two",
  },
  {
    name: "target three",
  },
  {
    name: "target four",
  },
  {
    name: "target five",
  },
];

const Home = () => {
  return (
    <div className="homeArea">
      <div className="text-center" style={{ width: "300px" }}>
        <CircularProgressbar
          className="text-center inline-block m-auto"
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 1,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",

            // Text size
            textSize: "16px",

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
            textColor: "#4A5ECF",
            trailColor: "#d6d6d6",
            backgroundColor: "#4A5ECF",
          })}
        />

        <h2 className="text-xl capitalize text-center">Employee Progress</h2>
      </div>

      <div className="flex ">
        <div className="teamArea rounded mr-6">
          <div className="team">
            <h6 className="py-2 capitalize text-center">Team Details</h6>
          </div>

          {teamDetails.map((team) => (
            <div className="singleMember">
              <h6 className="capitalize py-3">
                <FontAwesomeIcon icon={faUser} />
                <span className="ml-3">{team.name}</span>
              </h6>
            </div>
          ))}
        </div>

        <div className="targetArea rounded">
          <div className="target">
            <h6 className="py-2 capitalize text-center">Recent Target</h6>
          </div>

          {recentTargets.map((target) => (
            <div className="singleTarget">
              <h6 className="capitalize py-3">
                <FontAwesomeIcon icon={faClipboard} />
                <span className="ml-3">{target.name}</span>
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
