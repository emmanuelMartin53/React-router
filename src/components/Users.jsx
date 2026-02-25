import { Outlet } from "react-router-dom"

const Users = () => {
  return (
    <div className="container mt-3">
      <h1>Profil</h1>
      <Outlet />
    </div>
  )
}

export default Users
