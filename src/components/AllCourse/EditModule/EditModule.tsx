import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import db from '../../Firebase/Firebase';

const EditModule = () => {
    const [moduleVideo, setModuleVideo] = useState<any>([]);
    const [moduleQuiz, setModuleQuiz] = useState<any>([]);
    const [moduleTask, setModuleTask] = useState<any>([]);

    // get video data
    useEffect(() => {
        db.collection("course_videos").get().then((docs: any) => {
            const data = docs.docs.map((doc:any) => doc);
            setModuleVideo(data.map((module:any) => {
                return {...module.data(), id: module.id}
            }))
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, [])
    console.log(moduleVideo);
    
    // get quiz data
    useEffect(() => {
        db.collection("course_quizzes").get().then((docs: any) => {
            const data = docs.docs.map((doc:any) => doc);
            setModuleQuiz(data.map((module:any) => {
                return {...module.data(), id: module.id}
            }))
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, [])
    console.log(moduleQuiz)
    
    // get task data
    useEffect(() => {
        db.collection("course_tasks").get().then((docs: any) => {
            const data = docs.docs.map((doc:any) => doc);
            setModuleTask(data.map((module:any) => {
                return {...module.data(), id: module.id}
            }))
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, [])
    console.log(moduleTask)
    

    return (
        <div>
            <h3 className="text-xl font-semibold text-center">Edit Module Area</h3>
        </div>
    );
};

export default EditModule;