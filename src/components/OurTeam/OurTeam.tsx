import habibullah from "../../Assets/images/habibullah.png";
import shoharab from "../../Assets/images/shoharab.png";
import dipu from "../../Assets/images/dipu.png";
import masum from "../../Assets/images/masum.png";

const OurTeam = () => {
  return (
    <div className="container text-center mx-auto mt-12">
      <div>
        <h1 className="inline font-bold text-4xl mb-2 border-b-4 my-12 p-3 border-blue-600">
          About Us
        </h1>
        <br />
        <br />
        <p className="text-xl font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          soluta illo sequi iure a odio totam nemo tenetur voluptatum. Neque
          quibusdam dicta necessitatibus eveniet facilis ipsa, ullam corrupti
          fugiat doloribus ipsum laborum beatae inventore, praesentium tempore
          est eum nisi nihil, ab mollitia perspiciatis fuga pariatur temporibus.
          Eius nisi alias error!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          soluta illo sequi iure a odio totam nemo tenetur voluptatum. Neque
          quibusdam dicta necessitatibus eveniet facilis ipsa, ullam corrupti
          fugiat doloribus ipsum laborum beatae inventore, praesentium tempore
          est eum nisi nihil, ab mollitia perspiciatis fuga pariatur temporibus.
          Eius nisi alias error!
        </p>
      </div>
      <br />
      <h1 className="inline font-bold text-4xl mb-2 border-b-4 my-12 p-3 border-blue-600">
        Our Team
      </h1>
      <div className="flex flex-col md:flex-row px-2 mt-12 md:px-0">
        <div className="w-full lg:w-1/4 md:w-1/2 hover:bg-blue-200 bg-white rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0 text-center">
          <div className="text-center">
            <img
              className="rounded-full mx-auto w-full border-4 border-blue-600"
              src={habibullah}
              alt=""
            />
            <h1 className="text-3xl font-semibold text-center mt-5">
              Habibullah Bahar
            </h1>
            <h1 className="text-2xl font-semibold text-center text-blue-500">
              Team Leader
            </h1>
          </div>
        </div>
        <div className="w-full lg:w-1/4 md:w-1/2 hover:bg-blue-200 bg-white rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
          <div>
            <img
              className="rounded-full  mx-auto w-full border-4 border-blue-600"
              src={dipu}
              alt=""
            />
            <h1 className="text-3xl font-semibold text-center mt-5">
              Abu Naser Dipu
            </h1>
            <h1 className="text-2xl font-semibold text-center text-blue-500">
              Web Developer
            </h1>
          </div>
        </div>
        <div className="w-full lg:w-1/4 md:w-1/2 hover:bg-blue-200 bg-white rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
          <div>
            <img
              className="rounded-full mx-auto w-full border-4 border-blue-600"
              src={masum}
              alt=""
            />
            <h1 className="text-3xl font-semibold text-center mt-5">
              Masum Billa
            </h1>
            <h1 className="text-2xl font-semibold text-center text-blue-500">
              Web Developer
            </h1>
          </div>
        </div>
        <div className="w-full lg:w-1/4 md:w-1/2 hover:bg-blue-200 bg-white rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
          <div>
            <img
              className="rounded-full mx-auto w-full border-4 border-blue-600"
              src={shoharab}
              alt=""
            />
            <h1 className="text-3xl font-semibold text-center mt-5">
              Md Shoharab Pk
            </h1>
            <h1 className="text-2xl font-medium  text-center text-blue-500">
              Web Developer
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
