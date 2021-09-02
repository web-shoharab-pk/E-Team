import React, { useContext, useState } from "react";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import { UserDataContext } from "../../../Contexts/UserDataContext";
import { db, loginComapny, saveToLS } from "../loginmanager";

const LoginCompany = () => {
  const { userData, setUserData } = useContext(UserDataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    error: false,
    message: "",
  });

  const history = useHistory();
  const location = useLocation();
  let { from }: any = location.state || { from: { pathname: "/home" } };

  const handleOnChange = (event: any) => {
    const target = event.target;
    const emailRegEx =
      /^[a-zA-Z0-9._]{3,}[@]{1}[a-zA-Z]{3,}[.]{1}[a-zA-Z.]{2,6}$/;

    // For removing error
    setErrorMessage({ error: false, message: "" });

    // For email state update
    if (
      target.name === "email" &&
      target.value !== "" &&
      emailRegEx.test(target.value)
    ) {
      setEmail(target.value);
    } else if (target.name === "email" && !emailRegEx.test(target.value)) {
      setErrorMessage({ error: true, message: "Invaid Email Address" });
      setEmail("");
    }

    // For password state update
    if (
      target.name === "password" &&
      target.value !== "" &&
      target.value.length >= 8
    ) {
      setPassword(target.value);
    } else if (target.name === "password" && target.value.length <= 8) {
      setErrorMessage({
        error: true,
        message: "Password must be at least 8 character!",
      });
      setPassword("");
    }
  };

  // company data
  const getCompanyInfo = (companyId: string) => {
    return db
      .collection("companies")
      .doc(companyId)
      .get()
      .then((info) => {
        return info.data();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCompanyLogin = () => {
    if (email && password) {
      loginComapny(email, password).then((data: any) => {
        if (!data.message) {
          // For getting data form database
          db.collection("users")
            .doc(data?.id)
            .get()
            .then((user) => {
              if (!user?.exists) {
                setErrorMessage({
                  error: true,
                  message: "No active user registered with this email address!",
                });
              } else {
                const userInfo = user.data();
                getCompanyInfo(userInfo?.co_id).then((companyInfo) => {
                  const newObj = {
                    isSignedIn: true,
                    id: data?.id,
                    co_id: userInfo?.co_id,
                    name: userInfo?.name,
                    company_name: companyInfo?.company_name,
                    email: userInfo?.email,
                    role: userInfo?.role,
                    created_at: userInfo?.created_at,
                    updated_at: userInfo?.updated_at,
                  };
                  console.log(companyInfo);
                  console.log(newObj);

                  setUserData(newObj);
                  saveToLS("token", { user: newObj });
                  setErrorMessage({ error: false, message: "" });
                  history.replace(from);
                });
              }
            });
        } else {
          setErrorMessage({ error: true, message: data.message });
        }
      });
    } else {
      setErrorMessage({
        error: true,
        message: "Email or password field must not be empty or invalid format!",
      });
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      {
        // for redirect if the user already loggedin
        userData?.isSignedIn && <Redirect to={from} />
      }
      <div className="container px-5 py-12 mx-auto">
        <div className="shadow rounded max-w-xl mx-auto pt-4 hover:shadow-xl" data-aos="fade-left">
          <div className="login-switch mb-8 text-center">
            <div className="inline-block border border-blue-500 rounded-full">
              <Link
                to="/registration"
                className="inline-block border border-blue-500 text-white bg-blue-500 text-xl py-2 px-5 rounded-full"
              >
                Registration
              </Link>
              <span className="inline-block text-blue-500 text-xl py-2 px-3">
                Login
              </span>
            </div>
          </div>
          <div className="flex flex-col text-center w-full mb-3">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Login to company dashboard
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2 mb-3">
              {errorMessage.error && (
                <p className="text-red-600 p-3 bg-red-200 text-bold w-full ">
                  {errorMessage.message}
                </p>
              )}
            </div>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Email Address
                  </label>
                  <input
                    type="text"
                    name="email"
                    onChange={handleOnChange}
                    className="app-input"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                    className="app-input"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  onClick={handleCompanyLogin}
                  className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none transition delay-150 hover:bg-blue-600 rounded text-lg"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginCompany;
