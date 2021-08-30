import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../../Contexts/UserDataContext";
import db from "../Firebase/Firebase";

const AllIdea = () => {
  const { userData, setUserData } = useContext(UserDataContext);
  const [ideaDetails, setIdeaDetails] = useState<any>([] as object[]);
  const [users, setUsers] = useState<any>([] as object[]);

  useEffect(() => {
    db.collection("creative_ideas")
      .get()
      .then((data) => {
        const ideas = data.docs.map((doc) => ({ ...doc.data() }));
        setIdeaDetails(ideas);
      });
  }, []);
  return (
    <div className="lg:mx-7 mt-2">
      <div className="flex mb-8 lg:mx-4 items-center justify-between">
        <h2 className="text-xl lg:text-2xl font-semibold lg:font-bold">
          All Idea
        </h2>
        <Link
          className="bg-blue-500 text-white lg:text-xl lg:font-medium p-2 rounded-lg"
          to="/shareIdea"
        >
          Share Your Idea
        </Link>
      </div>
      {/* <div className="flex flex-wrap lg:flex-nowrap mb-8 justify-center">
        <div className="w-1/2 mb-2 lg:mb-0">
          <button className="w-11/12 cursor-pointer border text-md lg:text-lg border-blue-500 font-semibold bg-blue-500 text-white lg:font-bold py-2 rounded-lg">
            All
          </button>
        </div>

        <div className="w-1/2 mb-2 lg:mb-0">
          <button className="w-11/12 cursor-pointer border text-md lg:text-lg border-blue-500 font-semibold lg:font-bold py-2 rounded-lg">
            Campaign
          </button>
        </div>

        <div className="w-1/2">
          <button className="w-11/12 cursor-pointer border text-md lg:text-lg border-blue-500 font-semibold lg:font-bold py-2 rounded-lg">
            Sales Idea
          </button>
        </div>

        <div className="w-1/2">
          <button className="w-11/12 cursor-pointer border text-md lg:text-lg border-blue-500 font-semibold lg:font-bold py-2 rounded-lg">
            Tech Idea
          </button>
        </div>
      </div> */}

      {ideaDetails.map((ideaDetail: any) => (
        <div className="shadow rounded-md mb-4 px-1.5 py-3 lg:p-3">
          <h5 className="text-md text-center lg:text-left lg:text-lg border-b pb-2">
            <strong className="block lg:inline lg:mr-10">
              {ideaDetail.name}
            </strong>{" "}
          </h5>

          <div className="mt-2 w-full">
            <h5 className="text-justify mb-3">
              <strong className="mr-3">Title:</strong>
              {ideaDetail.title}
            </h5>
            <h5 className="text-justify mb-3">
              <strong className="mr-3">Benefits:</strong>
              {ideaDetail.benefit}
            </h5>
            <h5 className="text-justify mb-3">
              <strong className="mr-3">Category:</strong>
              {ideaDetail.category}
            </h5>
            <h5 className="text-justify mb-3">
              <strong className="mr-3">Details:</strong>
              {ideaDetail.details}
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllIdea;
