import firebase from 'firebase';
import React, {useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router';
import db from '../../Firebase/Firebase';

const AddVideo = () => {
    const [videoDetails, setVideoDetails] = useState<any>({});
    const {id}:any = useParams();
    // const history = useHistory();

    const handleVideoDetails = (e:any) => {
        setVideoDetails({ ...videoDetails, [e.target.id]: e.target.value });
    }

    const handleVideoDetailsSubmit = (e:any) => {
        e.preventDefault();
        const {title, link} = videoDetails;

        if (title && link) {
            db.collection("course_videos")
            .add({
                title: title,
                link: link,
                module_id: id,
                created_at: firebase.firestore.FieldValue.serverTimestamp(),
                updated_at: ''
            })
            .then((data:any) => {
                (document.getElementById("title") as HTMLInputElement).value = "";
                (document.getElementById("link") as HTMLInputElement).value = "";
                console.log(data)
                // history.goBack();
            })
            .catch((error:any) => {
            console.log(error);
            });
        }
    }

    return (
        <div className="mt-6 shadow rounded-lg p-6 mx-6">
            <h3 className="text-center text-2xl font-semibold mb-7">Add Video Area</h3>
            <form action="" onSubmit={handleVideoDetailsSubmit} className="text-center mx-6">
                <div className="lg:flex w-full mb-5 lg:space-x-12">
                    <div className="lg:w-5/6 text-left">
                        <label className="text-base text-left lg:font-semibold" htmlFor="">Video Title</label>
                        <br />
                        <input
                            className="rounded bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            id="title"
                            type="text"
                            onChange={handleVideoDetails}
                            required
                            name="video_title"
                            placeholder="Write Title"
                        />
                    </div>

                    <div className="lg:w-5/6 text-left">
                        <label className="text-base text-left lg:font-semibold" htmlFor="">Video Link</label>
                        <br />
                        <input
                            className="rounded bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            id="link"
                            type="text"
                            onChange={handleVideoDetails}
                            required
                            name="link"
                            placeholder="Write Link"
                        />
                    </div>
                </div>

                <input type="submit" value="Add Video" className="my-4 cursor-pointer bg-blue-500 rounded-3xl text-white font-semibold py-3 px-6" />
            </form>
        </div>
    );
};

export default AddVideo;