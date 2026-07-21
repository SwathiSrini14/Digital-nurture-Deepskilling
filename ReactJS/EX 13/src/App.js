import './App.css';

import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';

function App() {

  const showBook = true;
  const showBlog = true;
  const showCourse = true;

  let component;

  // Element Variable
  if (showBook) {
    component = <BookDetails />;
  }

  return (
    <div className="App">

      <h1>Blogger App</h1>

      {component}

      {/* Ternary Operator */}
      {showBlog ? <BlogDetails /> : <h3>No Blogs Available</h3>}

      {/* Logical && */}
      {showCourse && <CourseDetails />}

    </div>
  );
}

export default App;