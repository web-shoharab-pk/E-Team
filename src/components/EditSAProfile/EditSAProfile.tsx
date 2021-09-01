import { useContext, useEffect, useState } from "react";
import { SystemAdminDataContext } from "../../Contexts/UserDataContext";
import db from "../Firebase/Firebase";

const EditSAProfile = () => {
  const { systemAdminData } = useContext(SystemAdminDataContext);
  const [adminData, setAdminData] = useState<any>({});
  const {name, phone, email, address} = adminData;

  useEffect(() => {
    db.collection("system_admins").get()
    .then((docs: any) => {
      const singleAdmin = docs.docs.filter((doc:any) => doc.id === systemAdminData.id);
        setAdminData(singleAdmin[0].data());
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
  }, [])

  const handleOnChange = (e:any) => {
    setAdminData({...adminData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();
    
    db.collection("system_admins").doc(systemAdminData.id).set(adminData)
        .then((data:any) => {
          console.log("successfully added!")
        })
        .catch((error:any) => {
          console.log(error)
        });
  }

    return (
        <div className="shadow-lg lg:mx-7 mt-10 px-2 lg:px-16 pt-2 rounded">
        <h2 className="text-center text-2xl pb-4 lg:text-3xl font-bold text-blue-400">
          Update SA Profile
        </h2>
    
        <form action="" onSubmit={handleSubmit} className="form mt-4">
          <div className="lg:flex w-full mb-5 lg:space-x-16">
          <div className="lg:w-5/6">
              <label className="text-base lg:font-semibold" htmlFor="">
               Name
              </label>
              <br />
              <input
                className="rounded bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                id=""
                type="text"
                name="name"
                onKeyUp={handleOnChange}
                defaultValue={name}
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
                className="rounded bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                id=""
                type="email"
                name="email"
                onKeyUp={handleOnChange}
                defaultValue={email}
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
                className="rounded  bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                id=""
                type="number"
                name="phone"
                defaultValue={phone}
                required
                onKeyUp={handleOnChange}
                placeholder="number"
              />
            </div>
            <div className="lg:w-5/6">
              <label className="text-base lg:font-semibold" htmlFor="">
               Address
              </label>
              <br />
              <input
                className="rounded  bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                id="" 
                name="address"
                defaultValue={address}
                required
                onKeyUp={handleOnChange}
                placeholder="Address"
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

export default EditSAProfile;