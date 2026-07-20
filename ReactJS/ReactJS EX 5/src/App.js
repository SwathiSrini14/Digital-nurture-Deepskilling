import './App.css';

import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {

    const showBook = true;
    const showBlog = true;
    const showCourse = true;

    let component;

    if (showBook) {
        component = <BookDetails />;
    }

    return (

        <div className="App">

            <h1>Blogger App</h1>

            {component}

            {showBlog ? <BlogDetails /> : null}

            {showCourse && <CourseDetails />}

        </div>

    );

}

export default App;