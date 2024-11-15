import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import ManageSkills from "./pages/ManageSkills";
import ManageProjects from "./pages/ManageProjects";
import UpdateProject from "./pages/UpdateProject";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import ManageTimeline from "./pages/ManageTimeline";
import ViewProject from "./pages/ViewProject";


import { useEffect } from "react";
import { getUser } from "@/store/slices/userSlice";
import { getAllSkills } from "@/store/slices/skillSlice";
import { getAllSoftwareApplications } from "@/store/slices/softwareApplicationSlice";
import { getAllTimeline } from "@/store/slices/timelineSlice";
import { getAllMessages } from "@/store/slices/messageSlice";
import { getAllProjects } from "@/store/slices/projectSlice";
import { useDispatch} from "react-redux";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch data only if the user is authenticated and after getting the user data

    dispatch(getAllSkills());
    dispatch(getAllSoftwareApplications());
    dispatch(getAllTimeline());
    dispatch(getAllMessages());
    dispatch(getAllProjects());

  }, []);


  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/manage/skills" element={<ManageSkills />} />
        <Route path="/manage/timeline" element={<ManageTimeline />} />
        <Route path="/manage/projects" element={<ManageProjects />} />
        <Route path="/view/project/:id" element={<ViewProject />} />
        <Route path="/update/project/:id" element={<UpdateProject />} />
      </Routes>
      <ToastContainer position="bottom-right" theme="dark" />
    </Router>
  );
}

export default App;
