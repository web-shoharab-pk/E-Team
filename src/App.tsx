import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AllCourse from "./components/AllCourse/AllCourse";
import AllDepartment from "./components/AllDepartment/AllDepartment";
import AllIdea from "./components/AllIdea/AllIdea";
import AllUserList from "./components/AllUserList/AllUserList";
import ApplicationList from "./components/ApplicationList/ApplicationList";
import AssignCourse from "./components/AssignCourse/AssignCourse";
import AssignmentArea from "./components/AssignmentArea/AssignmentArea";
import AddSystemAdmin from "./components/Authentication/AddSystemAdmin/AddSystemAdmin";
import CreateNewUser from "./components/Authentication/CreateNewUser/CreateNewUser";
import LoginCompany from "./components/Authentication/LoginCompany/LoginCompany";
import { getDataFromLS } from "./components/Authentication/loginmanager";
import PrivateRoute from "./components/Authentication/PrivatRoute/PrivateRoute";
import RegisterCompany from "./components/Authentication/RegisterCompany/RegisterCompany";
import SARoute from "./components/Authentication/SARoute/SARoute";
import SystemAdminLogin from "./components/Authentication/SystemAdminLogin/SystemAdminLogin";
import SystemAdminSelftActivation from "./components/Authentication/SystemAdminSelftActivation/SystemAdminSelftActivation";
import UserLogin from "./components/Authentication/UserLogin/UserLogin";
import UserSelftActivation from "./components/Authentication/UserSelftActivation/UserSelftActivation";
import CompanyProfile from "./components/CompanyProfile/CompanyProfile";
import Contact from "./components/Contact/Contact";
import CourseVideo from "./components/CourseVideo/CourseVideo";
import CreateCourseTask from "./components/CreateCourseTask/CreateCourseTask";
import CreateDepartment from "./components/CreateDepartment/CreateDepartment";
import Dashboard from "./components/Dashboard/Dashboard";
import EditCompanyProfile from "./components/EditCompanyProfile/EditCompanyProfile";
import EditSaProfile from "./components/EditSaProfile/EditSaProfile";
import EditUser from "./components/EditUser/EditUser";
import FeedBacks from "./components/FeedBacks/FeedBacks";
import Home from "./components/Home/Home";
import InputApplication from "./components/InputApplication/InputApplication";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import Footer from "./components/MainHome/Footer/Footer";
import MainHome from "./components/MainHome/MainHome";
import Navbar from "./components/MainHome/Navbar/Navbar";
import MeetingList from "./components/MeetingList/MeetingList";
import NotFound from "./components/NotFound/NotFound";
import OurTeam from "./components/OurTeam/OurTeam";
import PricingCard from "./components/PricingCard/PricingCard";
import QuizArea from "./components/QuizArea/QuizArea";
import SetMeeting from "./components/SetMeeting/SetMeeting";
import ShareIdea from "./components/ShareIdea/ShareIdea";
import AllCompany from "./components/SystemAdmin/AllCompany/AllCompany";
import SADashboard from "./components/SystemAdmin/SADashboard/SADashboard";
import SAHome from "./components/SystemAdmin/SAHome/SAHome";
import SAProfile from "./components/SystemAdmin/SAProfile/SAProfile";
import ViewAllAdmin from "./components/SystemAdmin/ViewAllAdmin/ViewAllAdmin";
import TaskBoard from "./components/TaskBoard/TaskBoard";
import UserProfile from "./components/UserProfile/UserProfile";
import {
  SystemAdminDataContext,
  UserDataContext,
} from "./Contexts/UserDataContext";

const App = () => {
  const [userData, setUserData] = useState({
    isSignedIn: false,
    co_id: "",
    id: "",
    name: "",
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
            <Route path="/all-user">
              <Dashboard>
                <AllUserList />
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
            <PrivateRoute path="/company-profile">
              <Dashboard>
                <CompanyProfile />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/edit-company-profile">
              <Dashboard>
                <EditCompanyProfile />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/view-profile">
              <Dashboard>
                <UserProfile />
              </Dashboard>
            </PrivateRoute>

            <PrivateRoute path="/edit-profile">
              <Dashboard>
                <EditUser />
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
            <Route exact path="/user-login">
              <UserLogin />
            </Route>
            <PrivateRoute exact path="/:companyUserName/user-login">
              <UserLogin />
            </PrivateRoute>
            <Route exact path="/system-admin/login">
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
            <SARoute path="/edit-sa-profile">
              <SADashboard>
                <EditSaProfile />
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
