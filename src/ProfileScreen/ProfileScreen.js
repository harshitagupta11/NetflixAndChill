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

                            
                            <div className="profileScreen_planType">
                                <div>
                                    <p>
                                        Premium
                                    </p>
                                    <p>
                                        4K + HDR
                                    </p>
                                </div>
                                <div>
                                    <button className="profileScreen_subscribe">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                            <div className="profileScreen_planType">
                                <div>
                                    <p>
                                        Basic
                                    </p>
                                    <p>
                                        720
                                    </p>
                                </div>
                                <div>
                                    <button className="profileScreen_subscribe">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                            <div className="profileScreen_planType">
                                <div>
                                    <p>
                                        Standard
                                    </p>
                                    <p>
                                        1080p
                                    </p>
                                </div>
                                <div>
                                    <button className="profileScreen_subscribe">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
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