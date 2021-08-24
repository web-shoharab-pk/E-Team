import { faCamera, faPenSquare, faPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import AddQuiz from '../AddQuiz/AddQuiz';
import AddTask from '../AddTask/AddTask';
import AddVideo from '../AddVideo/AddVideo';

const AddModule = () => {
    const [videoToggle, setVideoToggle] = useState<boolean>(false);
    const [quizToggle, setQuizToggle] = useState<boolean>(false);
    const [taskToggle, setTaskToggle] = useState<boolean>(false);

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

    return (
        <div className="border text-center mt-6 pt-6 pb-10">
            <span className="px-5 py-2 rounded-md border border-green-600 bg-green-600 text-white font-medium">
                <FontAwesomeIcon className="mr-3" icon={faPlus} />
                Add a Module
            </span>

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

            {
                (videoToggle && !quizToggle && !taskToggle) &&
                <AddVideo />
            }

            {
                (!videoToggle && quizToggle && !taskToggle) &&
                <AddQuiz />
            }

            {
                (!videoToggle && !quizToggle && taskToggle) &&
                <AddTask />
            }
        </div>
    );
};

export default AddModule;