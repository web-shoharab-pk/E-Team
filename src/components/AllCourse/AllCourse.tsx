import React, { useContext, useEffect, useState } from "react";
import "./AllCourse.css";
import thumbnail from "../../Assets/images/course-thumbnail.png";
import Course from "../Course/Course";
import db from "../Firebase/Firebase";
import { UserDataContext } from "../../Contexts/UserDataContext";
import RingLoader from "react-spinners/RingLoader";

const AllCourse = () => {
  const { userData } = useContext(UserDataContext);
  const [courses, setCourses] = useState([] as object[]);

  useEffect(() => {
    db.collection("courses")
      .where("co_id", "==", userData.co_id)
      .get()
      .then((users: any) => {
        let allUserData = users.docs.map((doc: any) => doc);
        setCourses(allUserData);
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [userData.co_id]);

  return (
    <section className="all-courses">
      <div className="w-full">
        <h2 className="text-2xl text-center font-bold my-4">All Courses</h2>
      </div>
      <div>
        {courses.length === 0 ? (
          <div className="mx-auto mb-5">
            <RingLoader color="#4A90E2" size={70} />
          </div>
        ) : (
          <div className="flex flex-wrap">
            {courses.map((course: any) => (
              <Course course={course} thumbnail={thumbnail} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllCourse;
