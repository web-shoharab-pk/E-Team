import { faCamera, faPenSquare, faPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from 'firebase';
import React, { useState } from 'react';
import { useEffect } from 'react';
import db from '../../Firebase/Firebase';
import { Link } from 'react-router-dom';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import './AddModule.css';

const AddModule = ({ id }: any): JSX.Element => {
    const [addModuleToggle, setAddModuleToggle] = useState<boolean>(false);
    const [moduleTitle, setModuleTitle] = useState<any>('');
    const [moduleData, setModuleData] = useState<any>([]);
    const [moduleVideo, setModuleVideo] = useState<any>([]);
    const [moduleTask, setModuleTask] = useState<any>([]);
    const [moduleQuiz, setModuleQuiz] = useState<any>([]);
<<<<<<< HEAD
    const [searchValue, setSearchValue] = useState<any>('');

    useEffect(() => {
        !searchValue &&
            db.collection('course_modules').orderBy('createAt').onSnapshot(snapshot => {
                const data = snapshot.docs.filter(doc => doc.data().course_id === id);
                setModuleData(data.map(module => {
                    return {...module.data(), id:module.id}
                }));
           })
=======
    const [modifiedModules, setModifiedModules] = useState([] as object[]);

    useEffect(() => {
        db.collection('course_modules').orderBy('createAt').onSnapshot(snapshot => {
            const data = snapshot.docs.filter(doc => doc.data().course_id === id);
            setModuleData(data.map(module => {
                return { ...module.data(), id: module.id }
            }));
        })
>>>>>>> b9d8a16377914f3298f020b4039e5f4d39229e37
    }, [])
    console.log(moduleData)

    // get video data
    useEffect(() => {
        db.collection('course_videos').orderBy('created_at').onSnapshot(snapshot => {
            setModuleVideo(snapshot.docs.map(doc => doc.data()));
        })
    }, [])

    // get quiz data
    useEffect(() => {
        db.collection('course_quizzes').onSnapshot(snapshot => {
            setModuleQuiz(snapshot.docs.map(doc => doc.data()));
            console.log(snapshot.docs.map(doc => doc.data()));

        })
    }, [])

    // get task data
    useEffect(() => {
        db.collection('course_tasks').orderBy('created_at').onSnapshot(snapshot => {
            setModuleTask(snapshot.docs.map(doc => doc.data()));
        })
    }, [])

    const handleModule = (e: any) => {
        setModuleTitle(e.target.value);
    }

    const handleModuleSubmit = (e: any) => {
        e.preventDefault();

        if (moduleTitle) {
            db.collection("course_modules").add({
                title: moduleTitle,
                course_id: id,
                createAt: firebase.firestore.FieldValue.serverTimestamp(),
            })
                .then((data: any) => {
                    setModuleTitle('');
                    (document.getElementById("moduleTitle") as HTMLInputElement).value = "";
                    console.log(data);
                })
                .catch((error: any) => {
                    console.log(error)
                });
        }
    }

    const handleSearchValue = (e:any) => {
        setSearchValue(e.target.value);
    }

    const handleSearch = (e:any) => {
        e.preventDefault();

        db.collection('course_modules').orderBy('createAt').onSnapshot(snapshot => {
            const data = snapshot.docs.filter(doc => doc.data().course_id === id);
            const searchData = data.filter((search:any) => searchValue === search.data().title);
            setModuleData(searchData.map((module:any) => {
                return {...module.data(), id:module.id}
            }));
        })
        setSearchValue('');
    }

    return (
        <div className="border text-center mt-6 py-6">
            <div className="shadow mx-6 bg-gray-100 rounded-md py-5">
                <button onClick={() => setAddModuleToggle(addModuleToggle ? false : true)} className="px-5 py-2 block mx-auto rounded-md border border-green-600 bg-green-600 text-white font-medium">
                    <FontAwesomeIcon className="mr-3" icon={faPlus} />
                    Add a Module
                </button>

                {
                    addModuleToggle &&
                    <div className="mx-8">
                        <form onSubmit={handleModuleSubmit} action="" className="form mt-4" >
                            <div className="lg:w-full text-left">
                                <label className="text-base lg:font-semibold" htmlFor="">Module Title</label>
                                <br />
                                <input
                                    className="rounded mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
            </div>

<<<<<<< HEAD
            <div className="py-4 relative mx-6 shadow rounded-lg bg-gray-100 mt-5 text-gray-600">
                <form onSubmit={handleSearch}>
                    <input onKeyUp={handleSearchValue} className="border-2 w-96 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search"/>
                    <button type="submit" className="absolute right-72 top-1 mt-5 mr-4">
                        <i className="fas fa-search  text-gray-600 h-4 w-4 fill-current"></i>
                    </button>
                </form>
            </div>

            { 
                moduleData.map((module:any) => 
                    <div className="border relative bg-gray-100 shadow rounded-md mx-6 my-5 pt-4 pb-8">
=======
            {
                moduleData.map((module: any) =>
                    <div className="border relative bg-gray-100 shadow rounded-md mx-8 my-5 pt-4 pb-8">
>>>>>>> b9d8a16377914f3298f020b4039e5f4d39229e37
                        <p className="text-lg font-bold">{module.title}</p>
                            {
                                !moduleVideo.find((video: any) => module.id === video.module_id) &&

                                <Link to={`/edit-courses/video/${module.id}`} className="inline-block px-5 py-2 mt-4 mr-2 rounded-md border border-green-600 bg-green-600 text-white font-medium">
                                    <FontAwesomeIcon className="mr-3" icon={faCamera} />
                                    Add Video
                                </Link>
                            }
<<<<<<< HEAD
                            
                            {!moduleQuiz.length &&
                                <Link to={`/edit-courses/quiz/${module.id}`} className="px-5 mr-2 py-2 rounded-md border border-green-600 bg-green-600 text-white font-medium">
=======
                            {
                                !moduleQuiz.find((quiz: any) => module.id === quiz.module_id) &&
                                <Link to={`/edit-courses/quiz/${module.id}`} className="inline-block px-5  mt-4 mr-2 py-2 rounded-md border border-green-600 bg-green-600 text-white font-medium">
>>>>>>> b9d8a16377914f3298f020b4039e5f4d39229e37
                                    <FontAwesomeIcon className="mr-3" icon={faTasks} />
                                    Add Quiz
                                </Link>
                            }
                            {
                                !moduleTask.find((task: any) => module.id === task.module_id) &&
                                <Link to={`/edit-courses/task/${module.id}`} className="inline-block px-5 py-2  mt-4 rounded-md border border-green-600 bg-green-600 text-white font-medium">
                                    <FontAwesomeIcon className="mr-3" icon={faPenSquare} />
                                    Add Task
                                </Link>
                            }
<<<<<<< HEAD
                        </div>
                        

                        {(moduleQuiz.length || moduleTask.length || moduleVideo.length) &&
                            <div className="bg-white shadow pt-3 pb-5 mt-8 mx-8 rounded-md">
                                <p className="text-lg font-bold">Module Details</p>
                                
                                <div className="text-left py-5 px-4">
                                    <h1 className="my-1">
                                        <strong>Video: </strong>{moduleVideo.length ? (moduleVideo.find((video:any) => {
                                            if(video.module_id === module.id) {
                                                return (
                                                    video.link
                                                );
                                            } else {
                                                return null;
                                            }
                                        })) : 'N/A'}
                                    </h1>
                                    <h1 className="my-1">
                                        <strong>Task: </strong>{moduleTask.length ? 'hello': 'N/A'}
                                    </h1>
                                    <h1 className="my-1">
                                        <strong>Quiz: </strong>{moduleQuiz.length ? 'hello': 'N/A'}
                                    </h1>
                                </div>
                                
                                <Link to={`/edit-module/${module.id}`} className="px-5 py-2 rounded-md border border-blue-500 bg-blue-500 text-white font-medium">Edit Module</Link>
                            </div>
=======
                        {/* This is for showing videos  */}
                        {
                            moduleVideo.find((video: any) => module.id === video.module_id) &&
                            moduleVideo.map((video: any) => {
                                if (video.module_id === module.id) {
                                    let videoLink;
                                    // Checking the link
                                    if (video.link.includes('youtube.com/watch?v=')) {
                                        const splitedText = video.link?.split('youtube.com/watch?v=')[1];
                                        // Checking that there is any '&' sign or not
                                        if (splitedText?.includes('&')) {
                                            videoLink = splitedText.split('&')[0]
                                        } else {
                                            videoLink = splitedText;
                                        }
                                    } else if (video.link.includes('youtu.be/')) {
                                        videoLink = video.link.split('youtu.be/')[1]
                                    }
                                    return (
                                        <div className="block md:flex bg-white shadow py-3 mt-8 mx-8 rounded-md">
                                            <div className="w-full md:w-2/3 lg:w-1/2 m-auto text-center text-left pt-2 font-bold pb-5 px-4">
                                                <div className="yt-video-container">
                                                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoLink}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                </div>
                                                <h1 className="yt-video-title"> {video.title}</h1>
                                            </div>
                                            <div className="w-full md:w-1/3 lg:w-1/2">
                                                <button className="px-5 py-2 rounded-md border border-blue-500 bg-blue-500 text-white font-medium">Edit Video</button>
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return null
                                }
                            })
                        }

                        {/* This is for Quiz  */}
                        {
                            moduleQuiz.find((quiz: any) => module.id === quiz.module_id) &&
                            moduleQuiz.map((quiz: any) => {
                                if (quiz.module_id === module.id) {
                                    return (
                                        <div className="block md:flex bg-white shadow p-3 mt-8 mx-8 rounded-md  text-left">
                                            <div className="w-full md:w-2/3">
                                                <h2 className="text-lg font-bold text-left">Question: {quiz.quiz_question}</h2>
                                                <ul className="pl-6 list-disc">
                                                    <li
                                                        className={(quiz.right_answer === "option1") ? "text-green-500 font-bold" : ""}
                                                    >{quiz.option1}</li>
                                                    <li
                                                        className={(quiz.right_answer === "option2") ? "text-green-500 font-bold" : ""}
                                                    >{quiz.option2}</li>
                                                    <li
                                                        className={(quiz.right_answer === "option3") ? "text-green-500 font-bold" : ""}
                                                    >{quiz.option3}</li>
                                                    <li
                                                        className={(quiz.right_answer === "option4") ? "text-green-500 font-bold" : ""}
                                                    >{quiz.option4}</li>
                                                </ul>
                                            </div>
                                            <div className="w-full md:w-1/3">
                                                <button className="px-5 py-2 rounded-md border border-blue-500 bg-blue-500 text-white font-medium">Edit Video</button>
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return null
                                }
                            })
                        }

                        {/* This is for showing tasks  */}
                        {
                            moduleTask.find((task: any) => module.id === task.module_id) &&
                            moduleTask.map((task: any) => {
                                if (task.module_id === module.id) {
                                    return (
                                        <div className="block md:flex bg-white shadow p-3 mt-8 mx-8 rounded-md  text-left">
                                            <div className="w-full md:w-2/3">
                                                <h2 className="text-lg font-bold text-left">{task.title}</h2>
                                                <p>{task.description}</p>
                                            </div>
                                            <div className="w-full md:w-1/3">
                                                <button className="px-5 py-2 rounded-md border border-blue-500 bg-blue-500 text-white font-medium">Edit Task</button>
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return null
                                }
                            })

>>>>>>> b9d8a16377914f3298f020b4039e5f4d39229e37
                        }
                    </div>
                )
            }
        </div>
    );
};

export default AddModule;