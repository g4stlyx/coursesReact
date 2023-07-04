//images
import angular from "../images/angular.jpg"
import bootstrap from "../images/bootstrap5.png"
import cSharp from "../images/ccsharp.png"
import web from "../images/kompleweb.jpg"

import "../Course.css"

const courseMap ={
    angular,
    bootstrap,
    cSharp,
    web
}

function Course({courseName}) {
    return (
        <div className="course-div">
            <img className="course" src={courseMap[courseName]}></img>
        </div>
    )
}

export default Course;