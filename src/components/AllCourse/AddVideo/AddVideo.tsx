import React from 'react';

const AddVideo = () => {
    return (
        <div className="mt-6">
            <form action="" className="mx-6">
                <div className="lg:flex w-full mb-5 lg:space-x-12">
                    <div className="lg:w-5/6 text-left">
                        <label className="text-base text-left lg:font-semibold" htmlFor="">Video Title</label>
                        <br />
                        <input
                            className="rounded bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            id="title"
                            type="text"
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