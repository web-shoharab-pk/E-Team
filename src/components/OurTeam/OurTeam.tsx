import habibullah from "../../Assets/images/habibullah.png";
import shoharab from "../../Assets/images/shoharab.png";
import dipu from "../../Assets/images/dipu.png";
import masum from "../../Assets/images/masum.png";

const OurTeam = () => {
  return (
    <div className="container text-center mx-auto mt-12">
      <div className="">
        <h1 className="inline font-bold text-4xl mb-2 border-b-4 my-12 p-3 border-blue-600">
          About Us
        </h1>
        <br />
        <br />
        <p className="m-auto block text-lg md:w-4/5 text-justify">
        Our project is a team management system. With our web app, you can easily manage any company team. Which will save them a lot of time. IF the company admin wants, the employee can add. The company admin will be able to assign courses for his company’s employees so that they can fill the gap in their learning. There will be a time set system for team meetings. All the courses assigned will be given on the course list page. When you finish the video of each course, there will be a system and if you give an assignment, there will be a system to submit the assignment. The progress bar will show how many courses each employee has completed. Employees can share different ideas if they want and all the ideas will show on the all ideas page. Each employee will be given points based on their work and how many points will be given to the car on the LeaderBoard. Employees can contact other employees if they want.
        </p>
      </div>
      <br />
      <div className="my-12">
        <h1 className="inline font-bold text-4xl mb-2 border-b-4 my-12 p-3 border-blue-600">
          Our Team
        </h1>
        <div className="flex justify-center flex-col md:flex-row px-2 mt-12 md:px-0">
          <div className="w-full lg:w-1/5 md:w-1/2 hover:bg-blue-200 bg-white rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0 text-center">
            <div className="text-center">
              <img
                className="rounded-full mx-auto w-4/5 border-4 border-blue-600"
                src={habibullah}
                alt=""
              />
              <h1 className="text-xl font-semibold text-center mt-5">
                Habibullah Bahar
              </h1>
              <h1 className="text-md font-semibold text-center text-blue-500">
                Team Leader
              </h1>
            </div>
          </div>
          <div className="w-full lg:w-1/5 md:w-1/2 hover:bg-blue-200 bg-white rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
            <div>
              <img
                className="rounded-full  mx-auto w-4/5 border-4 border-blue-600"
                src={dipu}
                alt=""
              />
              <h1 className="text-xl font-semibold text-center mt-5">
                Abu Naser Dipu
              </h1>
              <h1 className="text-md font-semibold text-center text-blue-500">
                Web Developer
              </h1>
            </div>
          </div>
          <div className="w-full lg:w-1/5 md:w-1/2 hover:bg-blue-200 bg-white rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
            <div>
              <img
                className="rounded-full mx-auto w-4/5 border-4 border-blue-600"
                src={masum}
                alt=""
              />
              <h1 className="text-xl font-semibold text-center mt-5">
                Masum Billa
              </h1>
              <h1 className="text-md font-semibold text-center text-blue-500">
                Web Developer
              </h1>
            </div>
          </div>
          <div className="w-full lg:w-1/5 md:w-1/2 hover:bg-blue-200 bg-white rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
            <div>
              <img
                className="rounded-full mx-auto w-4/5 border-4 border-blue-600"
                src={shoharab}
                alt=""
              />
              <h1 className="text-xl font-semibold text-center mt-5">
                Md Shoharab Pk
              </h1>
              <h1 className="text-md font-medium  text-center text-blue-500">
                Web Developer
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
