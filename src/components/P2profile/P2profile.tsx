import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Component } from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { Button } from 'semantic-ui-react';
import { User }  from '../../store/user/types'
import { Link } from 'react-router-dom';

interface RouteParams {
  id: string;
};

export interface IP2profileProps extends RouteComponentProps<RouteParams> {
  userList: User[],
  loggedInUserId: number
}

interface IP2profileState {
  displayedUser: number
}

export class P2profile extends Component<IP2profileProps, IP2profileState> {

  constructor(props: IP2profileProps) {
    super(props);
    this.state = {
      displayedUser: this.props.loggedInUserId
    }
  }

  changeDisplayedUser() {
    let newDisplayedUser = this.state.displayedUser;
    newDisplayedUser++;
    if ( newDisplayedUser > this.props.userList.length ) {
      newDisplayedUser = 1
    }
    this.setState( { displayedUser: newDisplayedUser } );
  }

  public render() {
    const { match: { params } } = this.props;
    return (
      <Fragment>
        Page 2. User Profiles - User ParamValue: {params.id} StateValue: {this.state.displayedUser}
        <Button as={Link} to={`/P2profile/${this.state.displayedUser}`} onclick={this.changeDisplayedUser()}/>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    userList: state.user.userList,
    loggedInUserId: state.user.loggedInUserId
  };
}

export default connect(
  mapStateToProps,
  { }
)(P2profile);