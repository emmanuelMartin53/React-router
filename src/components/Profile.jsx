import axios from 'axios';
import { Component } from 'react';
import withRouter from "./WithRouter";

class Profile extends Component {

    state = {
        data: {}
    }

    componentDidMount() {
        const profilId = this.props.router.params.profilId; // depuis HOC

        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((resp) => {
            this.setState({
                data: resp.data[profilId - 1] // resp.data est un tableau, l'index = profilId
            })
        })
        .catch(() => {
            console.log("Nous avons une erreur")
        })
    }

    render() {

        const { email, name, phone } = this.state.data || {};

        return (
            <div className='container mt-3'>
                <h1>Profile</h1>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><strong>Nom:</strong> {name}</li>
                    <li className='list-group-item'><strong>Email:</strong> {email}</li>
                    <li className='list-group-item'><strong>Tél:</strong> {phone}</li>
                </ul>
            </div>
        )
    }
}


const routerProfile = withRouter(Profile);

export default routerProfile
