import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [user, setUser] = React.useState({
        name: '',
        followers: 0,
        images: '',
        uri: '',
    });
    const userToken = useSelector(state => state.user.userToken)

    const fetchUserInfo = () => {
        axios.get('https://api.spotify.com/v1/me', {
          headers: {
            Authorization: 'Bearer ' + userToken
          }
        })
          .then(res => {
            setUser({
                name: res.data.display_name,
                followers: res.data.followers.total,
                images: res.data.images[0].url,
                uri: res.data.uri
            })
          })
          .catch(err => {
            console.log(err)
          })
      }
    
    console.log(user)
    
    useEffect(() => {
        if (userToken) {
            fetchUserInfo()
        }
    }, [])

    return (
        <>
        <div className='center-content'>
            <div className='btn-back'>
                <Link className="sp_button" to="/create-playlist">
                    <div className="logout-btn">Back</div>
                </Link>
            </div>
            <h1 className='title'>User Info<span>.</span></h1>
            <div className='img-container-profile'>
                <img src={user.images} alt="logo-spotify" className="logo-profile" />
            </div>
            <div className='info-container-profile'>
                <h1 className='name-profile'>Display name</h1>
                <h2 className='name-profile-content'>{user.name}</h2>
                <h1 className='followers-profile'>Followers</h1>
                <h2 className='followers-profile-content'>{user.followers}</h2>
            </div>
        </div>
        <div className='btn-container-profile'>
            <a href={user.uri}>
                <div className="login-btn-profile">Open your spotify</div>
            </a>
        </div>
        </>
    );
};

export default Profile;