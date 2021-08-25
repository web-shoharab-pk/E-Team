import React, { useState } from 'react';

const AddTask = () => {
    const [task,setTask] = useState()
    return (
        <div className="mt-6">
            <form action="" className="mx-6">
                <div className="lg:w-full text-left">
                    <label className="text-base text-left lg:font-semibold" htmlFor="">Task Description</label>
                    <br />
                    <textarea className="border w-full py-3 px-4 bg-gray-100 focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded-md" name="" id="" placeholder="Write Task Description" cols={30} rows={5}></textarea>
                </div>

                <input type="submit" value="Add Task" className="my-4 cursor-pointer bg-blue-500 rounded-3xl text-white font-semibold py-3 px-6" />
            </form>
        </div>
    );
};

export default AddTask;