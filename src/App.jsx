import Menu from "./components/Menu";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Docs from "./components/Docs";
import Tutorial from "./components/Tutorial";
import Community from "./components/Community";
import ErrorPage from "./components/ErrorPage";
import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Docs />}/>
        <Route path="/tutorial" element={<Tutorial />}/>
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>



    </BrowserRouter>
  )
}

export default App
