import React, { useState, useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import loginBG from "../../Assets/images/Partnership-rafiki.png";
import signin from "./loginmanager";
import { useHistory, useLocation } from "react-router";

interface UserDataType {
  [key: string]: any;
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const location = useLocation();
  let { from }: any = location.state || { from: { pathname: "/" } };

  const handleOnChange = (event: any) => {
    const target = event.target;
    const emailRegEx =
      /^[a-zA-Z0-9._]{3,}[@]{1}[a-zA-Z]{3,}[.]{1}[a-zA-Z.]{2,6}$/;

    // For email state update
    if (
      target.name === "email" &&
      target.value !== "" &&
      emailRegEx.test(target.value)
    ) {
      setEmail(target.value);
    }

    // For password state update
    if (
      target.name === "password" &&
      target.value !== "" &&
      target.value.length >= 8
    ) {
      setPassword(target.value);
    }
  };

  const handleSignin = () => {
    if (email && password) {
      signin(email, password).then((data: UserDataType) => {
        if (!data.message) {
          console.log(data);
        } else {
          alert(data.message);
        }
      });
    } else {
      alert("Login failed");
    }
  };

    return (
        <div>
            <div className="loginArea container mx-auto">
                <div className="flex w-full justify-center my-12">
                    <div className="w-full xl:w-3/4 mt-14 lg:w-11/12 flex justify-between">
                        <div className="w-2/4 my-24 h-auto hidden lg:block lg:w-1/2 bg-cover rounded-l-lg" >
                            <img src={loginBG} alt="" />
                        </div>

                        <div className="loginFrom md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-2xl rounded-lg lg:rounded-l-none">
                            <div className="mt-5">
                                <h3 className="pt-4 text-3xl font-bold text-center">E - Team</h3>
                                <h5 className="pt-1 text-2xl font-medium text-center">Login</h5>
                                <p className="pt-3 text-lg font-normal text-center">Use Your credential to login Into account</p>
                            </div>

              <form className="px-8 pt-9 bg-white rounded">
                <div className="relative mb-8">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <span>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                  </div>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    onKeyUp={handleOnChange}
                    className="text-sm sm:text-base placeholder-gray-500 pl-14 pr-4 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="E-Mail Address"
                  />
                </div>

                <div className="relative mb-4">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <span>
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                  </div>

                  <input
                    id="password"
                    type="password"
                    name="password"
                    onKeyUp={handleOnChange}
                    className="text-sm sm:text-base placeholder-gray-500 pl-14 pr-4 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Password"
                  />
                </div>

                <div className="mt-10 text-center">
                  {/* <button
                                        className="w-36 rounded px-4 py-2 font-bold text-white hover:text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:shadow-outline" type="button"
                                        onClick={handleSignin} >
                                        LogIn
                                    </button> */}
                  <Link to="/home">Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
