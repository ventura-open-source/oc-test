import React from 'react';
import PropTypes from 'prop-types';

class User extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div style={{ marginLeft: 'auto' }}>
        <img
          style={{ height: '75%' }}
          src="" 
          alt="avatar" 
        /> 
        <span>{name}</span>
      </div>
    )
  }
}

User.propTypes = {
  name: PropTypes.string,
}

User.defaultProps = {
  name: 'Rucutundo'
}

export default User;
