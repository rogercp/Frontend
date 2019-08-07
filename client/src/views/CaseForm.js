/**
 * Dependencies
 */

import React, { useState, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";

/**
 * React component import
 */

import { OutsideCourtForm, CourtForm } from '../components/index'

/**
 *  Import view styles
 */

import './CaseForm.scss';

/**
 * Global Component Styles
 */

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(2),
    width: 200,
    color: 'white',
    backgroundColor: '#5C90C1',
    "&:hover": {
      backgroundColor: "#517EA8"
    },
    "&:active": {
      backgroundColor: "#476e91"
    }
  },
}));

/**
 * Define view
 */

const CaseForm = (props) => {
  const classes = useStyles();

  const courtFormHandler = e => {
    e.preventDefault();
    props.history.push('/cases/new/court');
  }

  const outsideCourtFormHandler = e => {
    e.preventDefault();
    props.history.push('/cases/new/outside');
  }

  return (
    <div className="court-question-container" style={{ paddingTop:"15%" }}>
      <h3>Is your case a</h3>
      <Button className={classes.button} onClick={courtFormHandler} variant="contained">
        Court Referral
      </Button>
        <h3> or a </h3>
      <Button className={classes.button} onClick={outsideCourtFormHandler} variant="contained">
        Non-Court Referral?
      </Button>
    </div>
  )
};
  
/**
 * Export view
 */
  
export default CaseForm;
