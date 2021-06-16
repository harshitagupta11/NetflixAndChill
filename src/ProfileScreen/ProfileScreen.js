import React from 'react';
import { useSelector } from 'react-redux';
import Nav from '../components/Nav';
import './ProfileScreen.css'
import { selectUser} from '../features/counter/userSlice'
import { auth } from '../config/firebase';
function ProfileScreen(props) {
    const user = useSelector(selectUser)
    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img className="profile_screen_avatar"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="avatar" />
                    <div className="profileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen_plans">
                            <h3>Plans</h3>

                            <p>Renewal date</p>
                            <button onClick={()=>auth.signOut()}
                            className="profileScreen_signOut">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileScreen;