import React from "react";

const Review = () => {
  return (
    <div className="text-center">
      <h1 className="title-font p-3 sm:text-4xl text-center text-3xl mb-4 mt-5 font-bold text-gray-900 border-b-4 border-blue-500 inline-block">
        OUR SERVICE REVIEW!
      </h1>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow mt-4 md:w-1/2 lg:w-1/3 lg:pl-24 md:pl-16 flex-col md:items-start md:text-left items-center text-center">
          <figure className="bg-gray-100 rounded-xl p-8">
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src="https://static.remove.bg/remove-bg-web/3661dd45c31a4ff23941855a7e4cedbbf6973643/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png"
              alt=""
              width="384"
              height="512"
            />
            <div className="pt-6 text-center space-y-4">
              <blockquote>
                <p className="text-lg font-semibold">
                  “Tailwind CSS is the only framework that I've seen scale on
                  large teams. It’s easy to customize, adapts to any design, and
                  the build size is tiny.”
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-cyan-600">Sarah Dayan</div>
                <div className="text-gray-500">Staff Engineer, Algolia</div>
              </figcaption>
            </div>
          </figure>
        </div>

        <div className="lg:flex-grow mt-4 md:w-1/2 lg:w-1/3 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <figure className="bg-gray-100 rounded-xl p-8">
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              width="384"
              height="512"
            />
            <div className="pt-6 text-center space-y-4">
              <blockquote>
                <p className="text-lg font-semibold">
                  “Tailwind CSS is the only framework that I've seen scale on
                  large teams. It’s easy to customize, adapts to any design, and
                  the build size is tiny.”
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-cyan-600">Sarah Dayan</div>
                <div className="text-gray-500">Staff Engineer, Algolia</div>
              </figcaption>
            </div>
          </figure>
        </div>

        <div className="lg:flex-grow mt-4 md:w-1/2 lg:w-1/3 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <figure className="bg-gray-100 rounded-xl p-8">
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src="https://cdn.corporatefinanceinstitute.com/assets/professional-1024x637.jpg"
              alt=""
              width="384"
              height="512"
            />
            <div className="pt-6 text-center space-y-4">
              <blockquote>
                <p className="text-lg font-semibold">
                  “Tailwind CSS is the only framework that I've seen scale on
                  large teams. It’s easy to customize, adapts to any design, and
                  the build size is tiny.”
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-cyan-600">Sarah Dayan</div>
                <div className="text-gray-500">Staff Engineer, Algolia</div>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Review;
