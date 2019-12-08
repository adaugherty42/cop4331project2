import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/add-experience' className='btn btn-light'>
        <i className='text-primary' /> Add A Course
      </Link>
      <Link to='/add-education' className='btn btn-light'>
        <i className='text-primary' /> Add A Past Course
      </Link>
    </div>
  );
};

export default DashboardActions;
