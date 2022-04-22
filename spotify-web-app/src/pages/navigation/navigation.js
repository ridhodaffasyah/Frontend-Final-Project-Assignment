import React, { useEffect } from 'react'
import Search from '../../pages/search/search'
import Login from '../login/login'
import { setUserToken } from '../../components/store/user'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import { redirect } from '../../components/data/endpoint'
import Profile from '../profile/profile'

const Navigation = () => {
    const dispatch = useDispatch()
    const userToken = useSelector((state) => state.user.userToken)

    useEffect(() => {
        const hash = window.location.hash
        window.location.hash = ''

        if (!userToken && hash) {
            const _token = hash.split('&')[0].split('=')[1]
            window.localStorage.setItem('token', _token)
            dispatch(setUserToken(_token))
        }
    }, [userToken, dispatch]);

    return (
            <Router>
                <Switch>
                    <Route path="/" exact={true}>
                        {userToken
                        ? <Redirect to="/create-playlist" />
                        : <div id="app">
                                <header className="App-header-2">
                                    <Login/>
                                </header>
                            </div>
                        }
                    </Route>
                    <Route path="/create-playlist" exact={true}>
                        {userToken
                        ? <div id="app">
                                <div className='container-button'>
                                    <a className="sp_button" href={redirect}>
                                        <div className="logout-btn">Logout</div>
                                    </a>
                                    <Link className="sp_button" to="/profile">
                                        <div className="profile-btn">Profile</div>
                                    </Link>
                                </div>
                                <header className="App-header">
                                    <Search/>
                                </header>
                            </div>
                                : <Redirect to="/"/>}
                    </Route>
                    <Route path="/profile" exact={true}>
                        {userToken
                        ? <div id="app">
                                <header className="App-header">
                                    <Profile/>
                                </header>
                            </div>
                        : <Redirect to="/create-playlist" />}
                    </Route>
                </Switch>
            </Router>
    )
}

export default Navigation
