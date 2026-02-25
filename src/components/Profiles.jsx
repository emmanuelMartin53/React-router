import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const { profilId } = useParams(); // Récupère l'id depuis l'URL
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${profilId}`
        );
        setData(response.data);
      } catch (err) {
        setError("Impossible de récupérer le profil");
      } finally {
        setLoading(false);
      }
    };

    if (profilId) fetchProfile();
  }, [profilId]);

  if (loading) return <p>Chargement du profil...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>Aucun profil trouvé</p>;

  return (
    <ul className='list-group list-group-flush'>
      <li className='list-group-item'><strong>Nom</strong> : {data.name}</li>
      <li className='list-group-item'><strong>Email</strong> : {data.email}</li>
      <li className='list-group-item'><strong>Téléphone</strong> : {data.phone}</li>
    </ul>
  );
};

export default Profile;
