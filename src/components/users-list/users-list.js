import React, { Component } from 'react';
import {usersError, usersLoaded, usersRequest} from "../../actions";
import { connect } from 'react-redux';
import Loader from '../loader';
import ErrorIndicator from "../error-indicator";
import UserItem from '../user-item';
import { SLink, SListItem } from '../../styled-components';

import GitHubServices from '../../services/github-services';
const services = new GitHubServices();


class UsersList extends Component {

  componentDidMount() {
    const { usersRequest, usersLoaded, usersError } = this.props;
    services.getAllUsers()
      .then((data) => {
        usersRequest();
        usersLoaded(data)
      })
      .catch(reject => {
        console.error(reject);
        usersError(reject);
      })
  }

  render () {
    const { users, error, loading } = this.props;
    if (loading) {
      return <Loader />
    }
    if (error) {
      return <ErrorIndicator />
    }
    return (
      <div>
        <ul>
          {
            users.map(user => {
              return (
                <SListItem key={user.id}>
                  <SLink href={user.pageUrl} target='_blank'>
                    <UserItem {...user} />
                  </SLink>
                </SListItem>
              )
            })
          }
        </ul>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    error: state.error,
    loading: state.loading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    usersRequest: () => dispatch(usersRequest()),
    usersLoaded: (data) => dispatch(usersLoaded(data)),
    usersError: (err) => dispatch(usersError(err))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);