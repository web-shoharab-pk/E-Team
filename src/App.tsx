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
import CreateNewUser from "./components/Authentication/CreateNewUser/CreateNewUser";
import AllCourse from "./components/AllCourse/AllCourse";
import MainHome from "./components/MainHome/MainHome";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import { db, getDataFromLS } from "./components/Authentication/loginmanager";
import {
  UserDataContext,
  SystemAdminDataContext,
} from "./Contexts/UserDataContext";
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
import OurTeam from "./components/OurTeam/OurTeam";
import SARoute from "./components/Authentication/SARoute/SARoute";
import SADashboard from "./components/SystemAdmin/SADashboard/SADashboard";
import ViewAllAdmin from "./components/SystemAdmin/ViewAllAdmin/ViewAllAdmin";
import UserSelftActivation from "./components/Authentication/UserSelftActivation/UserSelftActivation";
import TaskBoard from "./components/TaskBoard/TaskBoard";
import AllCompany from "./components/SystemAdmin/AllCompany/AllCompany";
import SAHome from "./components/SystemAdmin/SAHome/SAHome";
import EditUserProfile from "./components/EditUserProfile/EditUserProfile";
import EditCompanyProfile from "./components/EditCompanyProfile/EditCompanyProfile";
import EditSAProfile from "./components/EditSAProfile/EditSAProfile";
import UserProfile from "./components/UserProfile/UserProfile";
import CompanyProfile from "./components/CompanyProfile/CompanyProfile";
import SAProfile from "./components/SystemAdmin/SAProfile/SAProfile";
import AssignDepartment from "./components/AllUserList/AssignDepartment";
import AssignedDepartmentUser from "./components/AllDepartment/AssignedDepartmentUser";

const App = () => {
  const [userData, setUserData] = useState({
    isSignedIn: false,
    co_id: "",
    id: "",
    name: "",
    company_name: "",
    email: "",
    role: "",
    created_at: "",
    updated_at: "",
  });
  const [systemAdminData, setSystemAdminData] = useState({
    isSignedIn: false,
    id: "",
    name: "",
    email: "",
    phone: "",
    role: "system-admin",
    created_at: "",
    updated_at: "",
  });

  // for checking user
  useEffect(() => {
    checkIsLoginUser("token");
  }, []);

  // For checking that the user has already logged in or not
  const checkIsLoginUser = (token: string) => {
    const data = getDataFromLS(token);
    console.log(token);
    if (data?.user) {
      setUserData(data.user);
    }
    if (data?.admin) {
      setSystemAdminData(data.admin);
    }
  };
  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      <SystemAdminDataContext.Provider
        value={{ systemAdminData, setSystemAdminData }}
      >
        <Router>
          <Switch>
            <Route path="/pricing">
              <Navbar />
              <PricingCard />
              <Footer />
            </Route>
            <Route path="/contact">
              <Navbar />
              <Contact />
              <Footer />
            </Route>
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
            <Route path="/activate-account">
              <Navbar />
              <UserSelftActivation />
              <Footer />
            </Route>
            <PrivateRoute path="/create-user">
              <Dashboard>
                <CreateNewUser />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/all-user">
              <Dashboard>
                <AllUserList />
              </Dashboard>
            </PrivateRoute>
            <Route path="/assign-department/:userId">
              <Dashboard>
                <AssignDepartment />
              </Dashboard>
            </Route>
            <PrivateRoute path="/leaderBoard">
              <Dashboard>
                <LeaderBoard />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/taskboard">
              <Dashboard>
                <TaskBoard />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/setMeeting">
              <SetMeeting />
            </PrivateRoute>
            <PrivateRoute path="/inputApplication">
              <Dashboard>
                <InputApplication />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/courseVideo">
              <CourseVideo />
            </PrivateRoute>
            <PrivateRoute path="/meetingList">
              <Dashboard>
                <MeetingList />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/create-course-task">
              <Dashboard>
                <CreateCourseTask />
              </Dashboard>
            </PrivateRoute>
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
            <PrivateRoute path="/meetings">
              <Dashboard>
                <MeetingList />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/set-meeting">
              <Dashboard>
                <SetMeeting />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/all-department">
              <Dashboard>
                <AllDepartment />
              </Dashboard>
            </PrivateRoute>
            <Route path="/assigned-department-user/:departmentId">
            <Dashboard>
              <AssignedDepartmentUser />
              </Dashboard>
            </Route>
            <PrivateRoute path="/create-department">
              <Dashboard>
                <CreateDepartment />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/company-profile">
              <Dashboard>
                <CompanyProfile />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/view-profile">
              <Dashboard>
                <UserProfile />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/edit-user">
              <Dashboard>
                <EditUserProfile />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/edit-company">
              <Dashboard>
                <EditCompanyProfile />
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
            <Route exact path="/user-login">
              <UserLogin />
            </Route>
            <PrivateRoute exact path="/:companyUserName/user-login">
              <UserLogin />
            </PrivateRoute>
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
            <SARoute path="/system-admin/all-company">
              <SADashboard>
                <AllCompany />
              </SADashboard>
            </SARoute>
            <SARoute path="/system-admin/view-sa-profile">
              <SADashboard>
                <SAProfile />
              </SADashboard>
            </SARoute>
            <SARoute path="/system-admin/edit-sa-profile">
              <SADashboard>
                <EditSAProfile />
              </SADashboard>
            </SARoute>
            <SARoute path="/system-admin/">
              <SADashboard>
                <SAHome />
              </SADashboard>
            </SARoute>
            <Route exact path="/ourTeam">
              <Navbar />
              <OurTeam />
              <Footer />
            </Route>
            <Route exact path="/">
              <MainHome />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </SystemAdminDataContext.Provider>
    </UserDataContext.Provider>
  );
};

export default App;
