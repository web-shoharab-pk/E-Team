import React, { useEffect, useContext, useState } from "react";
import { UserDataContext } from "../../Contexts/UserDataContext";
import db from "../Firebase/Firebase";

const EditCompanyProfile = () => {
  const { userData } = useContext(UserDataContext);
  const [companyData, setCompanyData] = useState<any>({});
  const {company_name, co_description, email, phone, website} = companyData;

  useEffect(() => {
    db.collection("companies").get().then((docs: any) => {
        const singleCompany = docs.docs.filter((doc:any) => doc.id === userData.co_id);
        setCompanyData(singleCompany[0].data());
    }).catch((error:any) => {
        console.log("Error getting document:", error);
    });
  }, [])

  const handleOnChange = (e:any) => {
    setCompanyData({ ...companyData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();

    db.collection("companies").doc(userData.co_id).set(companyData)
        .then((data:any) => {
            console.log(data)
        })
        .catch((error:any) => {
            console.log(error)
        });
  }
  
  return (
    <div className="shadow-lg lg:mx-7 mt-10 px-2 lg:px-16 pt-2 rounded">
      <h2 className="text-center text-2xl pb-4 lg:text-3xl font-bold text-blue-400">
        Update Company Profile
      </h2>

      <form action="" onSubmit={handleSubmit} className="form mt-4">
        <div className="lg:flex w-full mb-5 lg:space-x-16">
          <div className="lg:w-5/6">
            <label className="text-base lg:font-semibold" htmlFor="">
              Name
            </label>
            <br />
            <input
              className="app-input"
              id=""
              defaultValue={company_name}
              type="text"
              name="company_name"
              onKeyUp={handleOnChange}
              required
              placeholder="name"
            />
          </div>
          <div className="lg:w-5/6">
            <label className="text-base lg:font-semibold" htmlFor="">
              Email
            </label>
            <br />
            <input
              className="app-input"
              id=""
              type="email"
              defaultValue={email}
              name="email"
              onKeyUp={handleOnChange}
              required
              placeholder="email"
            />
          </div>
        </div>

        <div className="lg:flex w-full mb-5 lg:space-x-16">
          <div className="lg:w-5/6">
            <label className="text-base lg:font-semibold" htmlFor="">
              Phone
            </label>
            <br />
            <input
              className="app-input"
              id=""
              type="number"
              defaultValue={phone}
              name="phone"
              onKeyUp={handleOnChange}
              required
              placeholder="number"
            />
          </div>
          <div className="lg:w-5/6">
            <label className="text-base lg:font-semibold" htmlFor="">
              WebSite
            </label>
            <br />
            <input
              className="app-input"
              id=""
              name="website"
              defaultValue={website}
              onKeyUp={handleOnChange}
              required
              placeholder="Website"
            />
          </div>
        </div>

        <div className="lg:flex w-full mb-5 lg:space-x-16">
          <div className="lg:w-full">
            <label className="text-base lg:font-semibold" htmlFor="">
              Description
            </label>
            <br />
            <textarea
              className="app-input"
              id=""
              defaultValue={co_description}
              name="co_description"
              onKeyUp={handleOnChange}
              required
              placeholder="Description"
            />
          </div>
        </div>

        <div className="text-center ">
          <input
            type="submit"
            value="Update"
            className="my-4 cursor-pointer bg-blue-500 rounded-3xl text-white font-semibold py-3 px-6"       
          />
        </div>
      </form>
    </div>
  );
};

export default EditCompanyProfile;