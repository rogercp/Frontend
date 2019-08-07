/**
 * Dependencies
 */

import React, { useEffect, useState } from 'react';
import axioswithAuth from '../helpers/axioswithAuth';
import AdminRequestCard from './AdminRequestCard';
import Grid from '@material-ui/core/Grid';

/**
 * Define view
 */

const AdminMediatorRequestList = (props) => {
  const [requests, setRequests]= useState([])
  
  useEffect(() => {
    async function fetchRequests() {
      const res = await axioswithAuth().get('/mediators/pending');
      setRequests(res.data);
    }

    fetchRequests()
  }, []);

  if (requests.length === 0) {
    return (
      <h3 style={{textAlign:"center"}}> There are no pending Mediator requests. </h3>
    )
  } else {
    return (
      <Grid container spacing={4} >
        {requests.map(requests => <AdminRequestCard requests={requests} key={requests.uid}/>)}
      </Grid>
    )
  }
}

/**
 * Export view
 */

 export default AdminMediatorRequestList
