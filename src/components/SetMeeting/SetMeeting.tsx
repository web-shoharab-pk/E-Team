import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../../Contexts/UserDataContext";
import db from "../Firebase/Firebase";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

const SetMeeting = () => {
  const { userData, setUserData } = useContext(UserDataContext);
  const [departments, setDepartments] = useState([] as object[])
  const [meetingDetails, setMeetingDetails] = useState({ dept_id: "", title: "", agenda: "", date: "", time: "" })

  useEffect(() => {
    db.collection('departments')
      .where('co_id', '==', userData.co_id)
      .get()
      .then((data) => {
        const array = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        setDepartments(array);
      })
  }, [])

  const handleOnChange = (e: any) => {
    setMeetingDetails({ ...meetingDetails, [e.target.name]: e.target.value });
    console.log({ ...meetingDetails, [e.target.name]: e.target.value });
  }

  const handleSubmit = () => {
    const { dept_id, title, agenda, date, time } = meetingDetails;
    if (dept_id && title && agenda && date && time) {
      db.collection('meetings')
        .add({ dept_id, title, agenda, meetingAt: `${date} ${time}` })
        .then(data => {
          alert('Meeting scheduled');
        })
    } else {
      alert("All field must be filled up!")
    }
  }
  return (
    <div className="">
      <div className="">
        <Sidebar />
      </div>
      <div className="absolute w-full top-0 justify-between">
        <Topbar />
      </div>

      <div className="py-12 rounded-lg shadow w-full md:w-9/12 lg:w-1/2 m-auto">
        <div className="pt-3">
          <h1 className="text-center text-gray-600 font-bold md:text-2xl text-xl">Set a meeting</h1>
        </div>

        <Link to="/shareIdea">share idea</Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:mx-7">
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-md text-light font-semibold">Department Name:</label>
            <select
              name="dept_id"
              onChange={handleOnChange}
              className="py-0.5 px-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" >
              <option value="">Select a department</option>
              {
                departments.map((dept: any) => <option key={dept.id} value={dept.id}>{dept.name}</option>)
              }
            </select>
          </div>

          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-md text-light font-semibold">Meeting Title:</label>
            <input
              name="title"
              onChange={handleOnChange}
              className="py-0.5 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
              type="text"
              placeholder="Title" />
          </div>
        </div>

        <div className="grid grid-cols-1 mt-5 lg:mx-7">
          <label className="uppercase md:text-sm text-md text-light font-semibold">Meeting Adenga:</label>
          <textarea
            name="agenda"
            onChange={handleOnChange}
            className="p-3 border-2 border-gray-300 rounded-md"
            placeholder="Agenda"
            cols={30}
            rows={3}></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 lg:mx-7">
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-md text-light font-semibold">Time:</label>
            <input
              name="time"
              onChange={handleOnChange}
              className="py-0.5 px-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
              type="time"
              placeholder="Time" />
          </div>

          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-md text-light font-semibold">Date:</label>
            <input
              name="date"
              onChange={handleOnChange}
              className="py-0.5 px-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
              type="date"
              placeholder="Date" />
          </div>
        </div>

        <div className='pt-8'>
          <button
            onClick={handleSubmit}
            className='w-auto block mx-auto bg-blue-500 hover:bg-blue-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Set the meeting</button>
        </div>

      </div>
    </div>
  );
};

export default SetMeeting;
