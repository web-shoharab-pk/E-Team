import React from "react";

//Temporary Data
const meetingList = [
  {
    Name: "Meeting Title",
    Team: "PH Team",
    Observation: "Piash",
    StartEndDate: "27/07/2021 to 27/07/2021",
    Status: "Approved",
    Action: "Edit",
  },
  {
    Name: "Meeting Title",
    Team: "PH Team",
    Observation: "Piash",
    StartEndDate: "27/07/2021 to 27/07/2021",
    Status: "Approved",
    Action: "Edit",
  },
  {
    Name: "Meeting Title",
    Team: "PH Team",
    Observation: "Piash",
    StartEndDate: "27/07/2021 to 27/07/2021",
    Status: "Approved",
    Action: "Edit",
  },
  {
    Name: "Meeting Title",
    Team: "PH Team",
    Observation: "Piash",
    StartEndDate: "27/07/2021 to 27/07/2021",
    Status: "Approved",
    Action: "Edit",
  },
];

const ApplicationList = () => {
  return (
    <div>
      <div className="shadow-lg mx-5 mt-4 px-7 py-5 pt-2 rounded-lg">
        <h2 className="text-2xl font-bold text-center">Application List</h2>

        <div className="pt-2">
          <div className="flex border bg-gray-200 w-full rounded-t-lg">
            <p className="text-lg font-semibold">Leave Application</p>
          </div>

          <div className="flex px-5 py-2 flex-row-reverse">
            <span className="inline-flex items-center bg-gray-200">
              <i className="fas fa-search"></i>
            </span>
            <input
              type="search"
              className="border px-5 outline-none py-0.5 rounded-3xl"
              name=""
              id=""
              placeholder="Search Here"
            />
          </div>

          <div className="mx-3 mb-3">
            <div className="flex">
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th className="bg-blue-100 border px-10 py-0.5">Name</th>
                    <th className="bg-blue-100 border px-10 py-0.5">Team</th>
                    <th className="bg-blue-100 border px-10 py-0.5">
                      Observation
                    </th>
                    <th className="bg-blue-100 border px-10 py-0.5">
                      Starting-Ending Date
                    </th>
                    <th className="bg-blue-100 border px-10 py-0.5">Status</th>
                    <th className="bg-blue-100 border px-10 py-0.5">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {meetingList.map((meeting) => (
                    <tr className="mb-3">
                      <td className="border-b-2 border-gray-300 px-10 py-0.5">
                        {meeting.Name}
                      </td>
                      <td className="border-b-2 border-gray-300 px-10 py-0.5">
                        {meeting.Team}
                      </td>
                      <td className="border-b-2 border-gray-300 px-10 py-0.5">
                        {meeting.Observation}
                      </td>
                      <td className="border-b-2 border-gray-300 px-10 py-0.5">
                        {meeting.StartEndDate}
                      </td>
                      <td className="border-b-2 border-gray-300 px-10 py-0.5">
                        {meeting.Status}
                      </td>
                      <td className="border-b-2 border-gray-300 px-10 py-0.5">
                        {meeting.Action}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex border bg-gray-300 w-full">
            <p className="text-lg font-semibold">Resignation Application</p>
          </div>

          <div className="flex border bg-gray-300 w-full rounded-b-lg">
            <p className="text-lg font-semibold">Others Application</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationList;
