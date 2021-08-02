import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
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
import { db } from "./components/Login/loginmanager";
import CreateCourse from "./components/CreateCourse/CreateCourse";

const App = () => {
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot: any) => {
      const snapshotArray = snapshot.docs.map((doc: any) => {
        return doc?.data();
      });
      // console.log(snapshotArray)
    });
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/share-idea">
          <Dashboard>
            <ShareIdea />
          </Dashboard>
        </Route>
        <Route path="/all-idea">
          <Dashboard>
            <AllIdea />
          </Dashboard>
        </Route>
        <Route path="/all-courses">
          <Dashboard>
            <AllCourse />
          </Dashboard>
        </Route>
        {/* <Route path="/assign-course">
          <Dashboard>
            <AssignCourse />
          </Dashboard>
        </Route> */}
        <Route path="/quiz">
          <QuizArea />
        </Route>
        <Route path="/create-user">
          <Dashboard>
            <CreateNewUser />
          </Dashboard>
        </Route>
        <Route path="/all-user">
          <Dashboard>
            <AllUserList />
          </Dashboard>
        </Route>
        <Route path="/leaderboard">
          <Dashboard>
            <LeaderBoard />
          </Dashboard>
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/set-meeting">
          <SetMeeting />
        </Route>
        <Route path="/input-application">
          <InputApplication />
        </Route>
        <Route path="/course-video">
          <CourseVideo />
        </Route>
        <Route path="/meeting-list">
          <Dashboard>
            <MeetingList />
          </Dashboard>
        </Route>
        <Route path="/application-list">
          <Dashboard>
            <ApplicationList />
          </Dashboard>
        </Route>
        <Route path="/create-course">
          <Dashboard>
            <CreateCourse />
          </Dashboard>
        </Route>
        <Route path="/assignment">
          <AssignmentArea />
        </Route>
        <Route path="/feedbacks">
          <FeedBacks />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Dashboard>
            <Home />
          </Dashboard>
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
