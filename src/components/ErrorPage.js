import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = (props) =>
  <div className='error-page'>
    {
        <React.Fragment>
            <p className='plan-name'>This page doesn't exist. Please check <Link to='/'>Homepage</Link> for more details.</p>
        </React.Fragment>
    }
  </div>

export default ErrorPage;