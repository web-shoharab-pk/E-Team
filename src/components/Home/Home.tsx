<<<<<<< HEAD
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faClipboard, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
=======
>>>>>>> 145dd4ee0301bc28d4e8e82490646a2a1fdc28e8
import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
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
      <div className="text-center">
        <h2 className="text-2xl font-bold">Dashboard</h2>
      </div>

      <div className="top-60">
        <div className="relative">
          <div className="w-52 fixed bottom-16 right-9 bg-white cursor-pointer flex items-center rounded-full py-1.5 justify-center shadow">
            <FontAwesomeIcon className="text-5xl text-blue-500 mr-3" icon={faFacebookMessenger} />
            <span className="text-xl font-bold">Start A Chat</span>
          </div>
        </div>
      </div>

      <div className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Target of this month
              </h2>
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="w-1/3 mx-auto mb-10">
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
                </div>
                <div className="flex flex-wrap -m-4">
                  <div className="w-1/2 text-center">
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      Target
                    </h2>
                    <p className="text-md text-gray-900 font-medium title-font mb-4">
                      55,860
                    </p>
                  </div>
                  <div className="w-1/2 text-center">
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      Achieved{" "}
                    </h2>
                    <p className="text-md text-gray-900 font-medium title-font mb-4">
                      55,860
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Training Progress
              </h2>
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="w-1/3 mx-auto mb-8">
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
                </div>
                <div className="w-full">
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-1">
                    Running training
                  </h2>
                  <h2 className="text-lg text-gray-900 font-bold title-font mb-1">
                    Email Ettiquates
                  </h2>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Upcomming Meetings
              </h2>
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="w-full">
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-1">
                    1. Digital Marketing team meeting
                  </h2>
                  <p className="ml-5">
                    <b>Time:</b> 20-July-2021, 5:36 PM
                  </p>
                  <p className="ml-5">
                    <b>Agenda:</b> Discussing on ‘how to increase audience to
                    our platforms
                  </p>
                </div>
                <div className="w-full">
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-1">
                    1. Digital Marketing team meeting
                  </h2>
                  <div className="text-center">
                    <a href="#/" className="text-center">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Position in leader board
              </h2>
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="flex flex-wrap -m-4">
                  <div className="w-1/2 text-center">
                    <h2 className="text-2xl text-gray-900 font-medium title-font mb-4">
                      Target
                    </h2>
                    <p className="text-4xl text-gray-900 font-medium title-font mb-4">
                      03
                    </p>
                  </div>
                  <div className="w-1/2 text-center">
                    <h2 className="text-2xl text-gray-900 font-medium title-font mb-4">
                      Achieved{" "}
                    </h2>
                    <p className="text-4xl text-gray-900 font-medium title-font mb-4">
                      02
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="text-center" style={{ width: '300px' }}>
        <h2 className="text-xl capitalize text-center">Employee Progress</h2>
      </div>

      <div className="flex ">
        <div className="teamArea rounded mr-6">
          <div className="team">
            <h6 className="py-2 capitalize text-center">Team Details</h6>
          </div>

          {
            teamDetails.map(team =>
              <div className="singleMember">
                <h6 className="capitalize py-3">
                  <FontAwesomeIcon icon={faUser} />
                  <span className="ml-3">{team.name}</span>
                </h6>
              </div>
            )
          }
        </div>

        <div className="targetArea rounded">
          <div className="target">
            <h6 className="py-2 capitalize text-center">Recent Target</h6>
          </div>

          {
            recentTargets.map(target =>
              <div className="singleTarget">
                <h6 className="capitalize py-3">
                  <FontAwesomeIcon icon={faClipboard} />
                  <span className="ml-3">{target.name}</span>
                </h6>
              </div>
            )
          }
        </div>
      </div> */}
    </div>
  );
};

export default Home;
