import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import UserLogin from "./components/Authentication/UserLogin/UserLogin";
import Dashboard from "./components/Dashboard/Dashboard";
import ShareIdea from "./components/ShareIdea/ShareIdea";
import AllIdea from "./components/AllIdea/AllIdea";
import QuizArea from "./components/QuizArea/QuizArea";
import SetMeeting from "./components/SetMeeting/SetMeeting";
import InputApplication from "./components/InputApplication/InputApplication";
import CourseVideo from "./components/CourseVideo/CourseVideo";
import AssignmentArea from "./components/AssignmentArea/AssignmentArea";
import FeedBacks from "./components/FeedBacks/FeedBacks";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import AllUserList from "./components/AllUserList/AllUserList";
import AssignCourse from "./components/AssignCourse/AssignCourse";
import MeetingList from "./components/MeetingList/MeetingList";
import ApplicationList from "./components/ApplicationList/ApplicationList";
import CreateNewUser from "./components/CreateNewUser/CreateNewUser";
import AllCourse from "./components/AllCourse/AllCourse";
import MainHome from "./components/MainHome/MainHome";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import { db } from "./components/Authentication/loginmanager";
import { ConpanyDataContext, SystemAdminDataContext } from "./Contexts/UserDataContext";
import RegisterCompany from "./components/Authentication/RegisterCompany/RegisterCompany";
import Navbar from "./components/MainHome/Navbar/Navbar";
import Footer from "./components/MainHome/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import LoginCompany from "./components/Authentication/LoginCompany/LoginCompany";
import PrivateRoute from "./components/Authentication/PrivatRoute/PrivateRoute";
import CreateDepartment from "./components/CreateDepartment/CreateDepartment";
import AllDepartment from "./components/AllDepartment/AllDepartment";
import SystemAdminLogin from "./components/Authentication/SystemAdminLogin/SystemAdminLogin";
import AddSystemAdmin from "./components/Authentication/AddSystemAdmin/AddSystemAdmin";
import CreateCourseTask from "./components/CreateCourseTask/CreateCourseTask";
import PricingCard from "./components/PricingCard/PricingCard";
import Contact from "./components/Contact/Contact";
import SystemAdminSelftActivation from "./components/Authentication/SystemAdminSelftActivation/SystemAdminSelftActivation";
import SARoute from "./components/Authentication/SARoute/SARoute";
import SADashboard from "./components/SystemAdmin/SADashboard/SADashboard";
import ViewAllAdmin from "./components/SystemAdmin/ViewAllAdmin/ViewAllAdmin";

const App = () => {
  const [userData, setUserData] = useState({
    isSignedIn: false,
    co_id: "",
    company_name: "",
    email: "",
    role: { role_name: "", role_id: 0 },
    created_at: "",
    updated_at: "",
  });
  const [systemAdminData, setSystemAdminData] = useState({
    isSignedIn: false,
    id: "",
    name: "",
    email: "",
    role: "system-admin",
    created_at: "",
    updated_at: "",
  });
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot: any) => {
      const snapshotArray = snapshot.docs.map((doc: any) => {
        return doc?.data();
      });
      console.log(snapshotArray);
    });
  }, [userData]);
  return (
    <ConpanyDataContext.Provider value={{ userData, setUserData }}>
      <SystemAdminDataContext.Provider value={{ systemAdminData, setSystemAdminData }}>
        <Router>
          <Switch>
            <PrivateRoute path="/shareIdea">
              <Dashboard>
                <ShareIdea />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/allIdea">
              <Dashboard>
                <AllIdea />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/all-courses">
              <Dashboard>
                <AllCourse />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/assign-course">
              <Dashboard>
                <AssignCourse />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/quiz">
              <QuizArea />
            </PrivateRoute>
            <Route path="/create-user">
              <Dashboard>
                <CreateNewUser />
              </Dashboard>
            </Route>
            <PrivateRoute path="/all-user">
              <Dashboard>
                <AllUserList />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/leaderBoard">
              <Dashboard>
                <LeaderBoard />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/setMeeting">
              <SetMeeting />
            </PrivateRoute>
            <PrivateRoute path="/inputApplication">
              <InputApplication />
            </PrivateRoute>
            <PrivateRoute path="/courseVideo">
              <CourseVideo />
            </PrivateRoute>
            <PrivateRoute path="/meetingList">
              <Dashboard>
                <MeetingList />
              </Dashboard>
            </PrivateRoute>
            <Route path="/create-course-task">
              <Dashboard>
                <CreateCourseTask />
              </Dashboard>
            </Route>
            <PrivateRoute path="/applicationList">
              <Dashboard>
                <ApplicationList />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/assignment">
              <AssignmentArea />
            </PrivateRoute>
            <PrivateRoute path="/feedbacks">
              <FeedBacks />
            </PrivateRoute>
            <PrivateRoute path="/home">
              <Dashboard>
                <Home />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/all-user">
              <Dashboard>
                <AllUserList />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/all-department">
              <Dashboard>
                <AllDepartment />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/create-department">
              <Dashboard>
                <CreateDepartment />
              </Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Navbar />
              <LoginCompany />
              <Footer />
            </Route>
            <Route path="/registration">
              <Navbar />
              <RegisterCompany />
              <Footer />
            </Route>
            <Route exact path="/:companyUserName/user-login">
              <UserLogin />
            </Route>
            <Route path="/pricing">
              <PricingCard />
            </Route>
            <Route path="/contact">
              <Navbar />
              <Contact />
            </Route>
            <Route path="/system-admin/login">
              <SystemAdminLogin />
            </Route>
            <Route path="/system-admin/activate-account">
              <Navbar />
              <SystemAdminSelftActivation />
              <Footer />
            </Route>
            <SARoute path="/system-admin/add">
              <SADashboard>
                <AddSystemAdmin />
              </SADashboard>
            </SARoute>
            <SARoute path="/system-admin/view-all">
              <SADashboard>
                <ViewAllAdmin />
              </SADashboard>
            </SARoute>
            <SARoute path="/system-admin/">
              <SADashboard>
                Hello
              </SADashboard>
            </SARoute>
            <Route exact path="/">
              <MainHome />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </SystemAdminDataContext.Provider>
    </ConpanyDataContext.Provider>
  );
};

export default App;
