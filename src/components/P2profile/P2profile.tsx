import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Component } from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { Button,  } from 'semantic-ui-react';
import { User }  from '../../store/user/types';
import { Link } from 'react-router-dom';
import TextInput  from '../TextInput';
import ProfileCard from './ProfileCard';

interface RouteParams {
  id: string;
}

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

  private changeDisplayedUser() {
    console.log('changing displayed user')
    if ( this.props.loggedInUserId !== 0 ) {
      let newDisplayedUser = this.state.displayedUser;
      newDisplayedUser++;
      if ( newDisplayedUser > this.props.userList.length - 1 ) {
        newDisplayedUser = 0
      }
      console.log('new user (calculated): ' + newDisplayedUser)
      this.setState( (state) => ({ displayedUser: newDisplayedUser }) );
    } else {
      this.setState( { displayedUser: 0 } );
    }
    console.log('new user (state): ' + this.state.displayedUser)
  }

  public render() {
    let { match: { params } } = this.props;
    if (this.props.loggedInUserId === 0) {
      return (
      <Fragment></Fragment>);
    } else {
      return (
        <Fragment>
          Page 2. User Profiles - User {params.id}
          <Button content='Display Next User'
            as={Link} 
            to={`/P2profile/${this.state.displayedUser+1}`} 
            onClick={() => this.changeDisplayedUser()} 
          />
          <TextInput serving = 'userInformation' rows='5' displayingUserId={params.id} ></TextInput>
          <ProfileCard displayingUserId={params.id}/>
        </Fragment>
      );
    }
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