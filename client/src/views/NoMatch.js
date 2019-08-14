/**
 * Dependencies
 */

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Define view
 */

function NoMatch() {
  return (
    <div className="container">
      <div className="row mx-auto">
        <div className="col-12">
          <div className="alert alert-danger my-4" role="alert" data-testid="alert-pagenotfound">
            Page Not Found
          </div>

          <Link to="/" className="btn btn-md btn-primary" data-testid="link-returntomainpage">Return to main page</Link>
        </div>
      </div>
    </div>
  )
};

/**
 * Export view
 */

export default NoMatch;
