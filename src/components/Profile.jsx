import { useParams } from "react-router-dom"

const Profile = () => {

  const params = useParams()
  // console.log(params)

  return (
    <ul className='list-group list-group-flush'>
      <li className='list-group-item'>ID utilisateur: {params.profilId}</li>
    </ul>
  )
}

export default Profile
