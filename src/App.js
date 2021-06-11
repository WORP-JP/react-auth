//https://qiita.com/k-penguin-sato/items/6e892231922b360a8659
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// eslint-disable-next-line
import firebase from './Firebase';

//screens
import Home from './screens/Home';
import Profile from './screens/Profile';
import SignInOrUp from './screens/SignInOrUp';
import SignUp from './screens/SignUp';

import Auth from './Auth';



class App extends React.Component {
        render() {
                return (
                        <>
                                <p>aaa</p>
                                <Router>
                                        <Switch>
                                                <Route exact path="/signin" component={SignInOrUp} />
                                                <Route exact path="/signup" component={SignUp} />
                                                {/* 以下認証のみ */}
                                                <Auth>
                                                        <Switch>
                                                                <Route exact path="/" component={Home} />
                                                                <Route exact path="/profile" component={Profile} />
                                                                <Route render={() => <p>not found.</p>} />
                                                        </Switch>
                                                </Auth>
                                        </Switch>
                                </Router>
                        </>
                );
        }
}

export default App;