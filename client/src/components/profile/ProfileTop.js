import React from 'react';
import PropTypes from 'prop-types';
import pegasus from './Pegasus3.png';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar }
  }
}) => {
  return (
    <div className='profile-top bg-dark p-2'>
      <img src={pegasus} />
      <h1 className='large'>{name}</h1>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
