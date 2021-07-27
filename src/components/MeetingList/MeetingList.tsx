import React from "react";

//Temporary Data
const meetingList = [
  {
    Title: "Meeting Title",
    Team: "PH Team",
    Agenda: "Few Agenda",
    Time: "27 july 2021, 3:00pm",
    Action: "Edit",
  },
  {
    Title: "Meeting Title",
    Team: "PH Team",
    Agenda: "Few Agenda",
    Time: "27 july 2021, 3:00pm",
    Action: "Edit",
  },
  {
    Title: "Meeting Title",
    Team: "PH Team",
    Agenda: "Few Agenda",
    Time: "27 july 2021, 3:00pm",
    Action: "Edit",
  },
];

const MeetingList = () => {
  return (
    <div>
      <div className="shadow-lg mx-5 mt-4 px-7 py-5 pt-2 rounded-lg">
        <h2 className="text-3xl font-bold text-left">Meeting List</h2>

        <div className="flex mt-3">
          <div className="w-2/4">
            <div className="flex justify-between mb-3">
              <button className="w-1/4 app-button">Upcoming</button>
              <button className="w-1/4 cursor-pointer border text-lg border-blue-500 font-semibold py-2 rounded-3xl">
                Previous
              </button>
            </div>
          </div>
        </div>

        <div className="flex mx-2 my-1">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="bg-blue-100 border px-10 py-4">Title</th>
                <th className="bg-blue-100 border px-10 py-4">Team</th>
                <th className="bg-blue-100 border px-10 py-4">Agenda</th>
                <th className="bg-blue-100 border px-10 py-4">Time</th>
                <th className="bg-blue-100 border px-10 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {meetingList.map((meeting) => (
                <tr className="mb-3">
                  <td className="border-b-2 border-gray-300 px-10 py-4">{meeting.Title}</td>
                  <td className="border-b-2 border-gray-300 px-10 py-4">{meeting.Team}</td>
                  <td className="border-b-2 border-gray-300 px-10 py-4">{meeting.Agenda}</td>
                  <td className="border-b-2 border-gray-300 px-10 py-4">{meeting.Time}</td>
                  <td className="border-b-2 border-gray-300 px-10 py-4">{meeting.Action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MeetingList;
