/**
 * Dependencies
 */

import React,{useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import { firebase } from '../helpers/index';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

/**
 * Define styles
 */

const useStyles = makeStyles(() => ({
  card: {
    paddingTop: "50px",
  }
}))

/**
 * Define view
 */

 function Login(props) {
  const classes = useStyles();

  useEffect(()=>{
    firebase();
  },[]);

  return (
    <div className="login">
      <Card className={classes.card}>
        <div id='firebaseui-auth-container'></div>
        <div id='loader'></div>
      </Card>
    </div>
  )
};

/**
 * Export view
 */

export default Login;
