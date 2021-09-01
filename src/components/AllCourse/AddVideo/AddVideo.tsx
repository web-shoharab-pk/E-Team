import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import db from '../../Firebase/Firebase';

const AddVideo = ({isEdit}:any) => {
    const [videoDetails, setVideoDetails] = useState<any>({});
    const [errorStatus, setErrorStatus] = useState({ error: false, msg: '' })
    const { id }: any = useParams();

    useEffect(() => {
        isEdit && 
            db.collection("course_videos").doc(id).get()
            .then((docs: any) => {
                setVideoDetails(docs.data());
            })
            .catch((error:any) => {
                console.log("Error getting document:", error);
            });
    }, [])

    const handleOnChange = (e: any) => {
        setErrorStatus({ error: false, msg: '' })

        if (e.target.id === 'title') {
            setVideoDetails({ ...videoDetails, [e.target.id]: e.target.value });
        }
        if (e.target.id === 'link') {
            const videoLink = e.target.value;
            // Checking the link
            if (videoLink.includes('youtube.com/watch?v=')) {
                console.log("https://www.youtube.com/watch?v=XglAoPzbB1I&t=293s".split('youtube.com/watch?v=')[1]);
                setVideoDetails({ ...videoDetails, [e.target.id]: e.target.value });
            } else if (videoLink.includes('youtu.be/')) {
                setVideoDetails({ ...videoDetails, [e.target.id]: e.target.value });
            } else {
                setErrorStatus({ error: true, msg: "This is not a youtube video" })
            }
        }

    }

    const handleVideoDetailsSubmit = (e: any) => {
        e.preventDefault();
        const { title, link } = videoDetails;

        if (title && link && !isEdit) {
            db.collection("course_videos")
                .add({
                    title: title,
                    link: link,
                    module_id: id,
                    created_at: firebase.firestore.FieldValue.serverTimestamp(),
                    updated_at: ''
                })
                .then((data: any) => {
                    (document.getElementById("title") as HTMLInputElement).value = "";
                    (document.getElementById("link") as HTMLInputElement).value = "";
                    window.history.go(-1)

                })
                .catch((error: any) => {
                    console.log(error);
                });
        }
        else if (title && link && isEdit) {
            db.collection("course_videos").doc(id).set(videoDetails)
                .then((data:any) => {
                    console.log(data)
                })
                .catch((error:any) => {
                    console.log(error)
                });
        }
        else {
            setErrorStatus({ error: true, msg: "All the field must not be empty or invalid input!" })
        } 
    }

    return (
        <div className="mt-6 shadow rounded-lg p-6 mx-6">
            <h3 className="text-center text-2xl font-semibold mb-7">{!isEdit ? "Add Video Area" : "Edit Video Details"}</h3>
            <form action="" onSubmit={handleVideoDetailsSubmit} className="text-center mx-6">
                {
                    errorStatus.error &&
                    <div className="text-red-500 mb-3">{errorStatus.msg}</div>
                }
                <div className="lg:flex w-full mb-5 lg:space-x-12">
                    <div className="lg:w-5/6 text-left">
                        <label className="text-base text-left lg:font-semibold" htmlFor="">Video Title</label>
                        <br />
                        <input
                            className="rounded bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            id="title"
                            type="text"
                            onChange={handleOnChange}
                            required
                            defaultValue={videoDetails.title}
                            name="video_title"
                            placeholder="Write Title"
                        />
                    </div>

                    <div className="lg:w-5/6 text-left">
                        <label className="text-base text-left lg:font-semibold" htmlFor="">Video Link(Only youtube video)</label>
                        <br />
                        <input
                            className="rounded bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            id="link"
                            type="text"
                            onChange={handleOnChange}
                            required
                            defaultValue={videoDetails.link}
                            name="link"
                            placeholder="Write Link"
                        />
                    </div>
                </div>

                <input type="submit" value={!isEdit ? "Add Video" : "Update"} className="my-4 cursor-pointer bg-blue-500 rounded-3xl text-white font-semibold py-3 px-6" />
            </form>
        </div>
    );
};

export default AddVideo;