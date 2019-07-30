/**
 * Dependencies
 */

import React, { useState, useEffect, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import firebase from 'firebase';
import uuid from 'uuid';
import axios from 'axios';

/**
 * Define route component
 */

let baseurl
if (process.env.NODE_ENV === 'production') {
   baseurl = "https://bravproduction.herokuapp.com/users/auth"
} else if (process.env.NODE_ENV === 'staging') {
  baseurl = "https://brav-staging.herokuapp.com/users/auth"
} else {
   baseurl = "http://localhost:8888/users/auth"
}

const PrivateRoute = ({ component: Component, errorBoundary: ErrorBoundary, path, exact }) => {
  firebase.auth().onAuthStateChanged(async (user)=> {
    if (user) {
      // User is signed in.
    let displayName = user.displayName;
    let email = user.email;
    let emailVerified = user.emailVerified;
    let photoURL = user.photoURL;
    let isAnonymous = user.isAnonymous;
    let uid = user.uid;
    let providerData = user.providerData;

    let token = await user.getIdToken();

    localStorage.setItem('token', token);
      axios
      .post(`${process.env.REACT_APP_API_URL}/users/auth`, { user: user, token: token })
      .then(res => {
        localStorage.setItem("id", res.data.id);
      })
      .catch(err => {
        console.error(err)
      })
      // axios
      // .post(`${process.env.REACT_APP_API_URL}/users/auth`,{user:user,token:token})

    } else {
      // User is signed out.
      // ...
    }
  });

  if (exact) {
    return <Route key={uuid.v4()} exact path={path} render={props => (
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    )} />
  } else {
    return <Route key={uuid.v4()} path={path} render={props => (
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    )} />
  }
};

/**
 * Export route component
 */

export default PrivateRoute;
