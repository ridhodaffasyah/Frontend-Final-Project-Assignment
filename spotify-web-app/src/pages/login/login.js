import React from 'react'
import { endpoint } from '../../components/data/endpoint'

function Login () {
  return (
        <>
            <div className="button_container">
                <img
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                    alt="logo-spotify"
                    className="logo"
                />
                <a
                className="sp_button"
                href={endpoint}
                >
                <div className="login-btn">Log In</div>
                </a>
            </div>
        </>
  )
}

export default Login