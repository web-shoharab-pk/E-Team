import React from "react";

const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-12 mx-auto">
        <div
          className="shadow max-w-xl rounded mx-auto pt-4 hover:shadow-xl bg-blue-400"
          data-aos="fade-up"
        >
          <div className="flex flex-col text-center w-full mb-3">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 ">
              Contact with us
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2 mb-3"></div>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-10  text-white">Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    className="app-input"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-10  text-white">Subject</label>
                  <input
                    required
                    type="text"
                    name="subject"
                    className="app-input"
                    placeholder="Email Subject"
                  />
                </div>
              </div>
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <label className="leading-8  text-white">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="app-input"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <label className="leading-8  text-white">Phone</label>
                  <input
                    required
                    type="text"
                    name="phone"
                    className="app-input"
                    placeholder="Your Phone Number"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-10  text-white"
                  >
                    Message
                  </label>
                  <textarea
                    required
                    name="co_description"
                    className="app-input"
                    placeholder="Your Message"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none transition delay-150 hover:bg-blue-600 rounded text-lg">
                  <i className="fas fa-paper-plane"> Send</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
