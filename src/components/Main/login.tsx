import * as React from "react";
import { Grid, Input, Button, Header, Form } from "semantic-ui-react";
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { signIn } from '../../store/user/actions';
import { User } from '../../store/user/types';

export interface ILoginProps {
  userList: User[];
  loggedInUserId: number;
  signIn: typeof signIn;
}

interface ILoginState {
  currUser: string;
  currPass: string;
}

export class Login extends React.Component<ILoginProps, ILoginState> {

  constructor(props: ILoginProps) {
    super(props);
    this.state = {
      currUser: '',
      currPass: ''
    }
  }

  private onUserFieldChange = (event: React.FormEvent<HTMLInputElement>) => {
    if ( this.props.loggedInUserId === 0 ) {
      this.setState( { currUser: event.currentTarget.value} );
    }
  }

  private onPassFieldChange = (event: React.FormEvent<HTMLInputElement>) => {
    if ( this.props.loggedInUserId === 0 ) {
      this.setState( { currPass: event.currentTarget.value} );
    }
  }

  onClickSubmitButton() {
    const { userList, loggedInUserId, signIn } = this.props;
    const { currUser, currPass } = this.state;
    if ( loggedInUserId === 0 ) {
      let matchedUser = userList.filter( user => user.username === currUser)[0];
      if ( matchedUser !== undefined ) {
        if ( matchedUser.password === currPass ) {
          signIn(matchedUser.userId)
          alert("Sign in successfully")
        }
      }
    }
  }

  public render() {
    return (
      <React.Fragment>
        <Grid columns="equal">
          <Grid.Row>
          </Grid.Row>
          <Grid.Column width={2}>
          </Grid.Column>
          <Grid.Column width={9}>
            <Header as='h3' color='blue' textAlign='left'>
              Please enter you user name and password to login
            </Header>
            <Form size='large'>
              <Input fluid icon="user" iconPosition="left" placeholder="Username"
                onChange={this.onUserFieldChange} />
              <Input fluid icon="lock" iconPosition="left" placeholder="Password" type="password"
                onChange={this.onPassFieldChange}/>
              <Button color="facebook" fluid size="large"
                onClick = {() => this.onClickSubmitButton()}>
                Login
              </Button>
            </Form>
          </Grid.Column>
          <Grid.Column width={1}>            
          </Grid.Column>
        </Grid>
      </React.Fragment>
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
  { signIn }
)(Login);