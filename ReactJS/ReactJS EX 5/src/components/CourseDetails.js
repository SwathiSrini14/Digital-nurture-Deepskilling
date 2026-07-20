function CourseDetails() {

    const showCourses = true;

    return (

        <div>

            {showCourses && (

                <div>

                    <h2>Course Details</h2>

                    <ul>
                        <li>ReactJS</li>
                        <li>Angular</li>
                        <li>Spring Boot</li>
                    </ul>

                </div>

            )}

        </div>

    );

}

export default CourseDetails;