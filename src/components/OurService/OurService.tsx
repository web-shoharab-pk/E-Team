import img1 from "./../../Assets/images/taskAssign.png";
import img2 from "./../../Assets/images/meetingSet.png";
import img3 from "./../../Assets/images/courseAssign.png";

const OurService = () => {
  return (
    <section className="text-gray-600 body-font text-center mt-8">
      <h1 className="title-font p-3 sm:text-4xl text-center text-3xl  mt-8 mb-4 font-bold text-gray-900 border-b-4 border-blue-500 inline-block">
        OUR SYSTEM SOME FEATURES!
      </h1>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center mr-3">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-blue-500">
            Task Management
          </h1>
          <p className="mb-8 leading-relaxed text-xl">
            you can assign a specific task for your team member and you can
            check task progress in your dashboard. and you can knock your team
            member and you can talk with your team member. You can remove your
            team member from the assigned task.
          </p>
        </div>
        <div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
          data-aos="flip-left"
        >
          <img
            className="object-cover object-center rounded shadow-2xl"
            alt="hero"
            src={img1}
          />
        </div>
      </div>

      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
          data-aos="flip-right"
        >
          <img
            className="object-cover object-center rounded shadow-2xl"
            alt="hero"
            src={img2}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center mr-3">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-blue-500">
            Assign Meeting
          </h1>
          <p className="mb-8 leading-relaxed text-xl">
            you can set a meeting at a specific time with a person or your team.
            And you can discuss with your team about your project. You and your
            team member join a video call with our meet system. And many other
            features in our meet system. You can set daliy meeting.
          </p>
        </div>
      </div>

      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center mr-3">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-blue-500">
            Assign Course
          </h1>
          <p className="mb-8 leading-relaxed text-xl">
            You can assign a course for your team member and you can check
            course progress. You can train your team member for your project.
            You can remove your team member from the assigned course. Your team
            member can review about course and In the course have many quiz and
            assignment for check member progress.
          </p>
        </div>
        <div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
          data-aos="flip-left"
        >
          <img
            className="object-cover object-center rounded shadow-2xl"
            alt="hero"
            src={img3}
          />
        </div>
      </div>
    </section>
  );
};

export default OurService;
