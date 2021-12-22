import React from 'react';
import { useSelector } from 'react-redux';
const Profile = () => {
        const user = useSelector((state) => state.auth.auth)
        const profileUser = () => {
            if (user) {
                const userProfile = user.users
                return (
                    <React.Fragment>
            <li className="list-group-item">
                 Name:               {userProfile.name}
            </li>
            <li className="list-group-item">
                Email: {userProfile.email}
            </li>
            <li className="list-group-item">
               Phone:  {userProfile.phone}
            </li>
                    </React.Fragment>
                )
            }
        }
    return (
        <React.Fragment>
            <div className="container">
            <div className="card mb-5">
        <h3 className="card-header">User Information</h3>
        <ul className="list-group">
            {profileUser()}
        </ul>
    </div>
            </div>
        </React.Fragment>
    );
}

export default Profile;
