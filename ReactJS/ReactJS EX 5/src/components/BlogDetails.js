function BlogDetails() {

    const isLoggedIn = true;

    return (
        <div>

            {
                isLoggedIn ?

                    <div>
                        <h2>Blog Details</h2>

                        <ul>
                            <li>React Hooks</li>
                            <li>Conditional Rendering</li>
                            <li>Virtual DOM</li>
                        </ul>
                    </div>

                    :

                    <h2>Please Login to Read Blogs</h2>

            }

        </div>
    );
}

export default BlogDetails;