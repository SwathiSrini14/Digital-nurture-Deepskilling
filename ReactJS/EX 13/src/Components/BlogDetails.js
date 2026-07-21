import React from "react";

function BlogDetails() {

    const blogs = [
        "React Hooks",
        "Conditional Rendering",
        "Virtual DOM"
    ];

    return (

        <div className="card">

            <h2>Blog Details</h2>

            <ul>

                {blogs.map((blog, index) => (
                    <li key={index}>{blog}</li>
                ))}

            </ul>

        </div>

    );

}

export default BlogDetails;