import firebase from 'firebase';
import React, {useEffect, useState} from 'react';
import db from '../../Firebase/Firebase';

const AddVideo = () => {
    const [videoDetails, setVideoDetails] = useState<any>({});

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
                module_id: '1',
                created_at: firebase.firestore.FieldValue.serverTimestamp(),
                updated_at: ''
            })
            .then((data:any) => {
                (document.getElementById("title") as HTMLInputElement).value = "";
                (document.getElementById("link") as HTMLInputElement).value = "";
                console.log(data)

            })
            .catch((error:any) => {
            console.log(error);
            });
        }
    }

    return (
        <div className="mt-6">
            <form action="" onSubmit={handleVideoDetailsSubmit} className="mx-6">
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