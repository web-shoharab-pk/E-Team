import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../../Contexts/UserDataContext";
import db from "../Firebase/Firebase";
import RingLoader from "react-spinners/RingLoader";

const MeetingList = () => {
  const { userData, setUserData } = useContext(UserDataContext);
  const [meetings, setMeetings] = useState([] as object[]);
  const [departments, setDepartments] = useState([] as object[]);

  useEffect(() => {
    db.collection("meetings")
      .where("co_id", "==", userData.co_id)
      .get()
      .then((data: any) => {
        // Updating meetings state
        setMeetings(
          data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))
        );
      });

    db.collection("departments")
      .where("co_id", "==", userData.co_id)
      .get()
      .then((data: any) => {
        // Updating departments state
        setDepartments(
          data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))
        );
      });
  }, []);
  return (
    <div className="shadow-lg lg:mx-5 mt-4 lg:px-7 py-5 pt-2 rounded-lg">
      <h2 className="text-lg mb-3 lg:mb-0 lg:text-3xl font-semibold lg:font-bold text-center lg:text-left">
        Meeting List
      </h2>

      <div className="flex mt-3">
        <div className="w-2/4">
          <div className="flex justify-between mb-3">
            <Link
              to="/set-meeting"
              className="bg-blue-500 border text-white border-blue-500 hover:bg-white hover:text-blue-500  py-2 px-4 rounded-full"
            >
              Scedule a meeting
            </Link>
            {/* <button className="w-1/4 app-button">Upcoming</button>
              <button className="w-1/4 cursor-pointer border text-lg border-blue-500 font-semibold py-2 rounded-3xl">
                Previous
              </button> */}
          </div>
        </div>
      </div>

      <div className="flex mx-2 my-1">
        {meetings.length === 0 ? (
          <div className="mx-auto mb-5">
            <RingLoader color="#4A90E2" size={70} />
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="bg-blue-100 border px-10 py-2">Title</th>
                <th className="bg-blue-100 border px-10 py-2">Department</th>
                <th className="bg-blue-100 border px-10 py-2">Agenda</th>
                <th className="bg-blue-100 border px-10 py-2">Time</th>
                <th className="bg-blue-100 border px-10 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {meetings?.map((meeting: any) => (
                <tr className="mb-3">
                  <td className="border-b-2 border-gray-300 px-10 py-2">
                    {meeting?.title}
                  </td>
                  <td className="border-b-2 border-gray-300 px-10 py-2">
                    {departments.map((dept: any) => {
                      if (meeting.dept_id === dept.id) {
                        return dept.name;
                      } else {
                        return null;
                      }
                    })}
                  </td>
                  <td className="border-b-2 border-gray-300 px-10 py-2">
                    {meeting.agenda}
                  </td>
                  <td className="border-b-2 border-gray-300 px-10 py-2">
                    {meeting.meetingAt}
                  </td>
                  <td className="border-b-2 border-gray-300 px-10 py-2">
                    Action
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MeetingList;
