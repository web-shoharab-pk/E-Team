import React from "react";
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
import CreateUser from "./components/CreateUser/CreateUser";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/shareIdea">
          <Dashboard>
            <ShareIdea />
          </Dashboard>
        </Route>
        <Route path="/allIdea">
          <Dashboard>
            <AllIdea />
          </Dashboard>
        </Route>
        <Route path="/quiz">
          <QuizArea />
        </Route>
        <Route path="/create-user">
          <Dashboard>
            <CreateUser />
          </Dashboard>
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/setMeeting">
          <SetMeeting />
        </Route>
        <Route path="/inputApplication">
          <InputApplication />
        </Route>
        <Route path="/courseVideo">
          <CourseVideo />
        </Route>
        <Route exact path="/">
          <Dashboard>
            <Home />
          </Dashboard>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
