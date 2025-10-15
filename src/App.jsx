import Menu from "./components/Menu";
import { Component } from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Docs from "./components/Docs";
import Tutorial from "./components/Tutorial";
import Community from "./components/Community";
import ErrorPage from "./components/ErrorPage";
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
       underconst: {
          Docs: false,
          Tutorial: true,      // Page  encore en construction
          Community: false
       }
    }
  }

  render () {
    const {underconst} = this.state

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
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    )

  }

}

export default App
