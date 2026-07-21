import React from "react";

function CourseDetails() {

    const courses = [
        "ReactJS",
        "Angular",
        "Spring Boot"
    ];

    return (

        <div className="card">

            <h2>Course Details</h2>

            <ul>

                {courses.map((course, index) => (
                    <li key={index}>{course}</li>
                ))}

            </ul>

        </div>

    );

}

export default CourseDetails;