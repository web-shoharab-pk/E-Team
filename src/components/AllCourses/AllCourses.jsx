import React from 'react';
import './AllCourses.css';
import thumbnail from '../../images/course-thumbnail.png';
import Course from '../Course/Course';

const AllCourses = () => {
    return (
        <section className="all-courses">
            <div className="w-full">
                <h2 className="text-2xl text-center font-bold my-4">All Courses</h2>
            </div>
            <div className="flex flex-wrap">
                <Course thumbnail={thumbnail}/>
                <Course thumbnail={thumbnail}/>
                <Course thumbnail={thumbnail}/>
                <Course thumbnail={thumbnail}/>
            </div>
        </section>
    );
};

export default AllCourses;