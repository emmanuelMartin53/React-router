import Menu from "./components/Menu";
import { Component } from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Docs from "./components/Docs";

import Tutorial from "./components/Tutorial";
import Community from "./components/Community";
import Profile from "./components/Profile";
import ErrorPage from "./components/ErrorPage";
import './App.css'

<<<<<<< HEAD
// Redirect est remplacé par Navigate dans la version 6 de react-router-dom

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
       underConst: {
        Docs: false,
        Tutorial: true,
        Community: false
       }
    }
  }

  render () {

    // const {underConst} = this.state;

    return (
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Docs />}/>
          <Route path="/tutorial" element={<Tutorial />}/>
=======
class App extends Component {
>>>>>>> a487ffb1d8af57b73ee60ee4f23a567904e20fa5

  constructor(props) {
    super(props)

<<<<<<< HEAD
          {/* <Route path="/tutorial" element={
            underConst.Tutorial ? (<Navigate to="/" replace/>) : (<Tutorial />)
          }/> */}

          <Route path="/community" element={<Community />} />
=======
    this.state = {
       underconst: {
          Docs: false,
          Tutorial: true,      // Page  encore en construction
          Community: false
       }
    }
  }

  render () {
    // const {underconst} = this.state

    return (
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Docs />}/>
          <Route path="/tutorial" element={<Tutorial />}/>

          {/* <Route path="/tutorial" element={
            underconst.Tutorial ? (<Navigate to="/" />) : (<Tutorial />)
          }/>
           */}
          <Route path="/community" element={<Community />} />
          <Route path="/users/:profilId" element={<Profile />}/>
>>>>>>> a487ffb1d8af57b73ee60ee4f23a567904e20fa5
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    )
<<<<<<< HEAD
  }
=======

  }

>>>>>>> a487ffb1d8af57b73ee60ee4f23a567904e20fa5
}

export default App
