import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { isConstructorDeclaration } from "typescript";
import { UserDataContext } from "../../Contexts/UserDataContext";
import db from "../Firebase/Firebase";
import swal from "sweetalert";

const ShareIdea = () => {
  const { userData, setUserData } = useContext(UserDataContext);
  const [users, setUsers] = useState([] as object[]);
  const [ideas, setIdeas] = useState({
    user_id: "",
    title: "",
    benefit: "",
    category: "",
    details: "",
  });
  console.log(userData);
  const handleOnChange = (e: any) => {
    setIdeas({ ...ideas, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(ideas);
    const { user_id, title, benefit, category, details } = ideas;
    if (user_id && title && benefit && category && details) {
      db.collection("creative_ideas")
        .add({
          co_id: userData.co_id,
          user_id: userData.id,
          title,
          benefit,
          category,
          details,
        })
        .then((data) => {
          //   e.target.reset();
          swal("Good job!", "Idea Successfully added", "success");
        });
    } else {
      swal("Sorry!", "All filled must be filled up", "error");
    }
  };
  return (
    <div className="shadow lg:mx-7 mt-4 px-2 lg:px-16 pt-2 rounded-lg">
      <h2 className="text-center text-2xl text-blue-400 lg:text-3xl font-medium">
        Share Idea
      </h2>

      <form onSubmit={handleSubmit} className="form mt-4">
        <div className="lg:flex w-full mb-5 lg:space-x-16">
          <div className="lg:w-5/6">
            <div className="mb-5">
              <label className="text-base lg:font-semibold" htmlFor="">
                Select Name
              </label>
              <br />
              <input
                onChange={handleOnChange}
                className="border bg-blue-100 rounded mt-1 p-2 w-full"
                name="user_id"
              />
            </div>

            <div className="mb-5 lg:mb-0">
              <label className="text-base lg:font-semibold" htmlFor="">
                Benefit
              </label>
              <br />
              <input
                onChange={handleOnChange}
                className="border bg-blue-100 rounded mt-1 p-2 w-full"
                type="text"
                name="benefit"
                placeholder="Write Benefit"
              />
            </div>
          </div>

          <div className="lg:w-5/6">
            <div className="mb-5">
              <label className="text-base lg:font-semibold" htmlFor="">
                Title
              </label>
              <br />
              <input
                onChange={handleOnChange}
                className="border bg-blue-100 rounded mt-1 p-2 w-full"
                type="text"
                name="title"
                placeholder="Write Title"
              />
            </div>

            <div className="">
              <label className="text-base lg:font-semibold" htmlFor="">
                Select Category
              </label>
              <br />
              <select
                onChange={handleOnChange}
                className="border bg-blue-100 rounded mt-1 p-2 w-full"
                name="category"
              >
                <option value="">Select Your Category</option>
                <option value="Campaign">Campaign</option>
                <option value="Sales Idea">Sales Idea</option>
                <option value="Tech Idea">Tech Idea</option>
              </select>
            </div>
          </div>
        </div>

        <div className="">
          <label className="text-base lg:font-semibold" htmlFor="">
            Details
          </label>
          <br />
          <textarea
            onChange={handleOnChange}
            className="border bg-blue-100 rounded p-2 mt-1 w-full"
            name="details"
            cols={30}
            rows={7}
            placeholder="Write Details"
          ></textarea>
        </div>

        <div className="text-center">
          <input
            onClick={handleSubmit}
            type="submit"
            className="cursor-pointer my-4 bg-blue-500 text-white font-semibold py-2 lg:py-3 px-5 lg:px-10 rounded-lg"
            value="Submit Idea"
          />
        </div>
      </form>
    </div>
  );
};

export default ShareIdea;
