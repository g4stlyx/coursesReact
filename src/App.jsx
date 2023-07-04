import { useState } from "react";
import "./App.css";
import Course from "./components/Course";

function App() {
  function getRandomCourse() {
    const courseArray = ["angular", "bootstrap", "cSharp", "web"];

    return courseArray[Math.floor(Math.random() * courseArray.length)];
    // Math.random 0 1 arası sayı veriyor, bunu array uzunluğu ile(4) çarparak
    // 0-3 arası bir sayı elde ediyoruz, bu sayının indexine göre de resim çağırıyoruz
  }

  const [courses, setCourses] = useState([]);

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]); // courses.push(getRandomCourse())
  };

  const courseList = courses.map((course, index) => {
      return <Course key={index} courseName={course} />;
  });

  return (
    <div className="app">
      <button className="add-button" onClick={handleClick}>Add a Random Course</button>
      <div className="courses"> {courseList}</div>
    </div>
  );
}

export default App;
