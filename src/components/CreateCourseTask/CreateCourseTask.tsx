import React from "react";

const CreateCourseTask = () => {
  return (
    <div className="shadow-lg  mx-7 mt-4 px-16 pt-2 rounded-lg">
      <h2 className="text-center text-3xl font-bold text-blue-400">
        Create Course Task
      </h2>

      <form action="" className="form mt-4">
        <div className="flex w-full mb-5 space-x-16">
          <div className="w-5/6">
            <div className="mb-5">
              <label className="text-lg font-semibold" htmlFor="">
                Task Name:
              </label>
              <br />
              <input
                className="border border-gray-100 rounded mt-1 p-2 w-full"
                type="text"
                placeholder="Name of task"
              />
            </div>

            <div className="mb-5 text-center">
              <label className="text-lg font-semibold" htmlFor="">
                Assigned Team Name
              </label>
              <br />
              <select
                className="border border-gray-100 rounded mt-1 p-2 w-full"
                name=""
                id=""
              >
                <option value="PH">Endgame</option>
                <option value="PH">Endgame</option>
                <option value="PH">Endgame</option>
              </select>
            </div>
          </div>

          <div className="w-5/6">
            <div className="mb-5">
              <label className="text-lg font-semibold" htmlFor="">
                Task File:
              </label>
              <br />
              <input
                className="border border-gray-100 rounded mt-1 p-2 w-full"
                type="file"
                placeholder="Write Title"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <label className="text-lg font-semibold" htmlFor="">
            Task Description:
          </label>
          <br />
          <textarea
            className="border border-gray-100 rounded p-2 mt-1 w-full"
            name=""
            id=""
            cols={30}
            rows={7}
            placeholder="Write task description"
          ></textarea>
        </div>

        <div className="text-center">
          <input
            type="submit"
            className="text-center cursor-pointer mx-auto my-4 bg-blue-500 text-white font-semibold py-3 px-10 rounded-lg"
            value="Let's Cook It"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateCourseTask;
