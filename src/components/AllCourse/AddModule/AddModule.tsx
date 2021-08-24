import { faCamera, faPenSquare, faPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from 'firebase';
import React, { useState } from 'react';
import { useEffect } from 'react';
import db from '../../Firebase/Firebase';
import AddQuiz from '../AddQuiz/AddQuiz';
import AddTask from '../AddTask/AddTask';
import AddVideo from '../AddVideo/AddVideo';

const AddModule = ({id}: any) : JSX.Element  => {
    const [addModuleToggle, setAddModuleToggle] = useState<boolean>(false);
    const [videoToggle, setVideoToggle] = useState<boolean>(false);
    const [quizToggle, setQuizToggle] = useState<boolean>(false);
    const [taskToggle, setTaskToggle] = useState<boolean>(false);
    const [moduleTitle, setModuleTitle] = useState<any>('');
    const [moduleData, setModuleData] = useState<any>({});
    const [addModuledataToggle, setAddModuledataToggle] = useState<boolean>(false);
    
    useEffect(() => {
        db.collection('course_modules').orderBy('createAt').onSnapshot(snapshot => {
            setModuleData(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    console.log(moduleData)

    const handleVideo = (value:any) => {
        setVideoToggle(value);
        setQuizToggle(false);
        setTaskToggle(false);
    }

    const handleQuiz = (value:any) => {
        setVideoToggle(false);
        setQuizToggle(value);
        setTaskToggle(false);
    }

    const handletask = (value:any) => {
        setVideoToggle(false);
        setQuizToggle(false);
        setTaskToggle(value);
    }

    const handleModule = (e:any) => {
        setModuleTitle(e.target.value);
    }

    const handleModuleSubmit = (e:any) => {
        e.preventDefault();

        if(moduleTitle) {
            db.collection("course_modules").add({
                title: moduleTitle,
                course_id: id,
                module_id: '1',
                createAt: firebase.firestore.FieldValue.serverTimestamp(), 
            })
            .then((data:any) => {
                setModuleTitle('');
                (document.getElementById("moduleTitle") as HTMLInputElement).value = "";
                console.log(data);
            })
            .catch((error:any) => {
            console.log(error)
            });
        }
    }
    const last:any =moduleData[moduleData.length - 1];
    console.log(last)
    return (
        <div className="border text-center mt-6 pt-6 pb-10">
           { 
                !last?.title ? 
                <button onClick={() => setAddModuleToggle(addModuleToggle ? false : true)} className="px-5 py-2 rounded-md border border-green-600 bg-green-600 text-white font-medium">
                    <FontAwesomeIcon className="mr-3" icon={faPlus} />
                    Add a Module
                </button>
               :
                 <span onClick={() => setAddModuledataToggle(addModuledataToggle ? false : true)} className="px-5 py-2 cursor-pointer rounded-md border border-green-600 bg-green-600 text-white font-medium">{last.title}</span>
            }

            {
                (addModuleToggle && !last?.title) && 
                <div className="mx-8">
                    <form onClick={handleModuleSubmit} action="" className="form mt-4" >
                        <div className="lg:w-full text-left">
                            <label className="text-base lg:font-semibold" htmlFor="">Module Title</label>
                            <br />
                            <input
                                className="rounded  bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                id="moduleTitle"
                                name="moduleTitle"
                                onChange={handleModule}
                                type="text"
                                required
                                placeholder="Write Title"
                            />
                        </div>

                        <div className="text-center ">
                            <input
                                type="submit"
                                value="Add Module"
                                className="my-4 cursor-pointer bg-blue-500 rounded-3xl text-white font-semibold py-3 px-6"
                            />
                        </div>
                    </form>
                </div>
            }


            {   addModuledataToggle && 
                <div className=" pt-6">
                    <button onClick={() => handleVideo(videoToggle ? false : true)} className="px-5 py-2 mr-2 rounded-md border border-blue-500 bg-blue-500 text-white font-medium">
                        <FontAwesomeIcon className="mr-3" icon={faCamera} />
                        Add Video
                    </button>
                    <button onClick={() => handleQuiz(quizToggle ? false : true)} className="px-5 mr-2 py-2 rounded-md border border-blue-500 bg-blue-500 text-white font-medium">
                        <FontAwesomeIcon className="mr-3" icon={faTasks} />
                        Add Quiz Set
                    </button>
                    <button onClick={() => handletask(taskToggle ? false : true)}className="px-5 py-2 rounded-md border border-blue-500 bg-blue-500 text-white font-medium">
                        <FontAwesomeIcon className="mr-3" icon={faPenSquare} />
                        Add Task
                    </button>
                </div>
            }

            {
                (videoToggle && !quizToggle && !taskToggle && addModuledataToggle) &&
                <AddVideo />
            }

            {
                (!videoToggle && quizToggle && !taskToggle && addModuledataToggle) &&
                <AddQuiz />
            }

            {
                (!videoToggle && !quizToggle && taskToggle && addModuledataToggle) &&
                <AddTask />
            }
        </div>
    );
};

export default AddModule;