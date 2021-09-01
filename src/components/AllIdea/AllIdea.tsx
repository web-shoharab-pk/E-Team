import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../../Contexts/UserDataContext";
import db from "../Firebase/Firebase";
import RingLoader from "react-spinners/RingLoader";

const AllIdea = () => {
  const { userData, setUserData } = useContext<any>(UserDataContext);
  const [ideaDetails, setIdeaDetails] = useState<any>([]);
  const [users, setUsers] = useState([] as object[]);
  console.log(userData, ideaDetails);
  useEffect(() => {
    // ideas
    db.collection("creative_ideas")
      .get()
      .then((data: any) => {
        const ideas = data.docs.map((doc: any) => ({ ...doc.data() }));
        setIdeaDetails(ideas);
      });
    // user collection
    db.collection("users")
      .get()
      .then((data: any) => {
        const users = data.docs.map((doc: any) => ({ ...doc.data() }));
        setUsers(users);
        console.log(users);
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
      <div>
        {ideaDetails.length === 0 ? (
          <div className="mx-auto mb-5">
            <RingLoader color="#4A90E2" size={70} />
          </div>
        ) : (
          <div>
            {ideaDetails.map((ideaDetail: any) => (
              <div className="shadow rounded-md mb-4 px-1.5 py-3 lg:p-3">
                <h5 className="text-md text-center lg:text-left lg:text-lg border-b pb-2">
                  <strong className="block lg:inline lg:mr-10">
                    {users.find(
                      (user: any) => user.id === ideaDetails.user_id
                    ) &&
                      users.map((user: any) => {
                        if (ideaDetails.user_id === user.id) {
                          // let videoLink;
                          // Checking the link
                          return <span>{user.name}</span>;
                        } else {
                          return null;
                        }
                      })}
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
        )}
      </div>
    </div>
  );
};

export default AllIdea;
