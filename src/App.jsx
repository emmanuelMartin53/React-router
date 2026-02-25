import {Routes, Route, Navigate} from "react-router-dom";
import { lazy, Suspense } from "react";
import Docs from "./components/Docs";

import Menu from "./components/Menu";
import Tutorial from "./components/Tutorial";
import Community from "./components/Community";
import Profile from "./components/Profiles";
import ErrorPage from "./components/ErrorPage";
import Users from "./components/Users";
// import Blog from "./components/Blog"

import Installation from "./components/Installation";
import './App.css'
import Hooks from "./components/Hooks";
import Fondamentaux from "./components/Fondamentaux";
import NoteUsers from "./components/NoteUsers";

const LazyBlog = lazy(() => import("./components/Blog"))

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
          <Route path="/docs" element={<Docs />}>
            <Route index element={<Installation />} />
            <Route path="installation" element={<Installation />}/>
            <Route path="fondamentaux" element={<Fondamentaux />}/>
            <Route path="hooks" element={<Hooks />}/>
          </Route>
          <Route path="/tutorial" element={<Tutorial />}/>
          {/* <Route path="/tutorial" element={
            underconst.Tutorial ? (<Navigate to="/" />) : (<Tutorial />)
          }/>
           */}


          <Route path="/community" element={<Community />} />
          <Route path="users" element={<Users />}>
            <Route path=":profilId" element={<Profile />}/>
            <Route path="noteUsers" element={<NoteUsers />}/>
          </Route>

          {/* <Route path="/blog" element={<Blog />}/> */}
          <Route
            path="/blog"
            element={
            <Suspense
              fallback={<div>Chargement des articles...</div>}
            >
              <LazyBlog />
            </Suspense>
          }
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </>
    )
  // }
}

export default App
