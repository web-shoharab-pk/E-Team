import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { UserDataContext } from '../../../Contexts/UserDataContext';
import AddModule from '../AddModule/AddModule';
import db from "../../Firebase/Firebase";

const EditCourse = () => {
    const [collapse, setCollapse] = useState<boolean>(false);
    const {id}:any = useParams();
    const { userData } = useContext(UserDataContext);
    const [singleUserData, setSingleUserData] = useState<any>({});
    const {co_id, course_title, instructor, thumbnail} = singleUserData;

    useEffect(() => {
        db.collection("courses").where('co_id', '==', userData.co_id).get().then((users: any) => {
            let userData = users.docs.filter((doc: any) => doc.id === id);
            setSingleUserData(userData[0].data());
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, [userData.co_id]);

    const handleOnChange = (e:any) => {
        setSingleUserData({ ...singleUserData, [e.target.id]: e.target.value });

    }

    const handleSubmit = (e:any) => {
        e.preventDefault();

        db.collection("courses").doc(id).set(singleUserData)
        .then((data:any) => {
            console.log(data)
        })
        .catch((error:any) => {
            console.log(error)
        });
    }

    return (
        <div className="mx-8">
            <div className="border">
                <div className="text-center pb-3">
                    <h3 className="py-4 text-xl capitalize font-semibold">{course_title}</h3>
                    <button onClick={() => setCollapse(collapse ? false : true)} className="px-5 py-2 rounded-md border border-blue-500 bg-blue-500 text-white font-medium">
                        <FontAwesomeIcon className="mr-2" icon={faEdit} />
                        Show/Hide Details
                    </button>
                </div>

                {
                    collapse && 
                        <div className="mx-8">
                            <form action="" onSubmit={handleSubmit} className="form mt-4" >
                                <div className="lg:flex w-full mb-5 lg:space-x-16">
                                <div className="lg:w-5/6">
                                    <label className="text-base lg:font-semibold" htmlFor="">
                                    Course Title
                                    </label>
                                    <br />
                                    <input
                                    className="rounded bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    onKeyUp={handleOnChange}
                                    id="title"
                                    type="text"
                                    required
                                    defaultValue={course_title}
                                    name="course_title"
                                    placeholder="course_title"
                                    />
                                </div>
                                <div className="lg:w-5/6">
                                    <label className="text-base lg:font-semibold" htmlFor="">
                                    Instructor:
                                    </label>
                                    <br />
                                    <input
                                    className="rounded bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    id="instructor"
                                    type="text"
                                    onKeyUp={handleOnChange}
                                    defaultValue={instructor}
                                    required
                                    name="instructor"
                                    placeholder="instructor"
                                    />
                                </div>
                                </div>

                                <div className="lg:flex w-full mb-5 lg:space-x-16">
                                <div className="lg:w-5/6">
                                    <label className="text-base lg:font-semibold" htmlFor="">
                                    Thumbnail
                                    </label>
                                    <br />
                                    <input
                                    className="rounded  bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    id="thumbnail"
                                    onKeyUp={handleOnChange}
                                    name="thumbnail"
                                    defaultValue={thumbnail}
                                    type="text"
                                    required
                                    placeholder="thumbnail"
                                    />
                                </div>
                                </div>

                                <div className="text-center ">
                                <input
                                    type="submit"
                                    value="Update Course"
                                    className="my-4 cursor-pointer bg-blue-500 rounded-3xl text-white font-semibold py-3 px-6"
                                />
                                </div>
                            </form>
                        </div>
                }
            </div>

            <AddModule id={id} />
        </div>
    );
};

export default EditCourse;