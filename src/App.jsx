import Menu from "./components/Menu";
import { Component } from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Docs from "./components/Docs";

import Tutorial from "./components/Tutorial";
import Community from "./components/Community";
import ErrorPage from "./components/ErrorPage";
import './App.css'

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


          {/* <Route path="/tutorial" element={
            underConst.Tutorial ? (<Navigate to="/" replace/>) : (<Tutorial />)
          }/> */}

          <Route path="/community" element={<Community />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
