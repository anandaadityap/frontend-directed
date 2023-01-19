import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Course from "./pages/Course";
import Dashboard from "./pages/Dashboard";
import EditCourse from "./components/Dashboard/CourseDash/Edit/EditCourse";
import EditVideo from "./components/Dashboard/ListVideo/Edit/EditVideo";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VideoCourse from "./pages/VideoCourse";
import CreateCourse from "./components/Dashboard/CourseDash/Create/CreateCourse";
import CreateVideo from "./components/Dashboard/ListVideo/Create/CreateVideo";
import Video from "./components/VideoCourse/Video";
import Jobseeker from "./pages/Jobseeker";
import DashboardJob from "./pages/DashboardJob";
import EditJob from "./components/JobsDash/Edit/EditJob";
import ApplyJob from "./components/ApplyJob";
import CreateJob from "./components/JobsDash/CreateJob";
import ListKandidat from "./components/JobsDash/ListKandidat";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/Register"
            element={<Register />}
          />
          <Route
            path="/Login"
            element={<Login />}
          />
          <Route
            path="/Course"
            element={<Course />}
          />
          <Route
            path="/Jobseeker"
            element={<Jobseeker />}
          />
          <Route
            path="/ApplyJob/:id"
            element={<ApplyJob />}
          />
          <Route
            path="/Video/:id"
            element={<Video />}
          />
          <Route
            path="/About"
            element={<About />}
          />
          <Route
            path="/Dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/DashboardJob/:id"
            element={<DashboardJob />}
          />
          <Route
            path="/ListKandidat/:id"
            element={<ListKandidat />}
          />
          <Route
            path="/CreateJob"
            element={<CreateJob />}
          />
          <Route
            path="/EditJob/:id"
            element={<EditJob />}
          />
          <Route
            path="/CreateCourse"
            element={<CreateCourse />}
          />
          <Route
            path="/EditCourse/:id"
            element={<EditCourse />}
          />
          <Route
            path="/VideoCourse/:id"
            element={<VideoCourse />}
          />
          <Route
            path="/CreateVideo/:id"
            element={<CreateVideo />}
          />
          <Route
            path="/EditVideo/:id"
            element={<EditVideo />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
