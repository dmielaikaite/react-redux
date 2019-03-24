import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {

  render () {
    // moved to mapStateToProps
    // const user = this.props.users.find((user) => user.id === this.props.userId)
    const { user } = this.props;
    if(!user) {
      return null;
    }

    return (
      <div className="user-header">
        {user.name}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.userId)
  }
}

export default connect(mapStateToProps)(UserHeader);