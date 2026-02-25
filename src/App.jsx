import Menu from "./components/Menu";
import {Routes, Route, Navigate} from "react-router-dom";
import Docs from "./components/Docs";

import Tutorial from "./components/Tutorial";
import Community from "./components/Community";
import Profile from "./components/Profile";
import ErrorPage from "./components/ErrorPage";
import './App.css'

const App = () => {

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //      underconst: {
  //         Docs: false,
  //         Tutorial: true,      // Page  encore en construction
  //         Community: false
  //      }
  //   }
  // }

  // render () {
  //   // const {underconst} = this.state

    return (
      <>
        <Menu />
        <Routes>
          <Route path="/" element={<Navigate to="/docs" />}/>
          <Route path="/docs" element={<Docs />}/>
          <Route path="/tutorial" element={<Tutorial />}/>
          {/* <Route path="/tutorial" element={
            underconst.Tutorial ? (<Navigate to="/" />) : (<Tutorial />)
          }/>
           */}
          <Route path="/community" element={<Community />} />
          <Route path="/users/:profilId" element={<Profile />}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </>
    )
  // }
}

export default App
