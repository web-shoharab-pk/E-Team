import React from "react";
import profile from "../../Assets/images/profile.jpg";

const InProgress = () => {
  return (
    <>
      <div className="ml-7 p-3 w-80 bg-gray-100 rounded">
        <h3 className="text-sm font-medium text-gray-900">IN PROGRESS</h3>
        <ul className="mt-3">
          <li>
            <a href="#" className="block p-5 bg-white rounded-md">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Task board page design
                </p>
              </div>
              <div className="flex justify-between pt-3">
                <p className="text-sm text-gray-600">Aug 11</p>
                <span>
                  <img
                    src={profile}
                    alt="profile-pic"
                    className="h-6 w-6 rounded-full"
                  />
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default InProgress;
