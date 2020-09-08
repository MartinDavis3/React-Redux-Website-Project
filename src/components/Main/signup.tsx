/* eslint-disable @typescript-eslint/no-unused-expressions */
import * as React from 'react';
import { RootState } from '../../store';
import { signUp } from '../../store/user/actions';
import { User } from '../../store/user/types'
import { Grid, Form, Button, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

export interface IRegisterProps {
  signUp: typeof signUp,
  userList: User[]
}

export class Register extends React.Component<IRegisterProps> {

  generateID = (): number => {
    let randomNumber: number = Math.floor(Math.random() * 1000);
    randomNumber += this.props.userList.length;
    return randomNumber;
  }

  newRegistration = (event: any) => {
    event.preventDefault();
    // Handle retrieval of users field value.
    const usersField: HTMLInputElement | null = document.querySelector('[name="username"]');
    const passField: HTMLInputElement | null = document.querySelector('[name="password"]');

    let usersFieldValue: string = '';
    if (usersField !== null) usersFieldValue = usersField.value;

    let passFieldValue: string = '';
    if (passField !== null) passFieldValue = passField.value;

    // Add new item 
    this.props.signUp(usersFieldValue, passFieldValue);

    console.log(usersField, passField)
    if (usersField !== null) usersField.value = '';

    if (passField !== null) passField.value = '';
  }
 
  render () {
    return (
      <Grid columns="equal">
        <Grid.Column width={1}>          
        </Grid.Column>
        <Grid.Column width={9}> 
          <Grid.Row>
          </Grid.Row>
          <Header as='h2' color='green' textAlign='left' >
            Sign-Up
          </Header>
          <Form size='large' onSubmit ={this.newRegistration}>
            <Form.Input name= 'username' fluid icon='user'  placeholder='UserName' />
            <Form.Input name = 'password' fluid icon='lock' placeholder='Password' type='password'/>
            <Button color='green' fluid size='large'>
              Sign-Up
            </Button>
          </Form>
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
      </Grid>  
    );
  }
}
  
// Retrieve "users" from our "global" redux state.
const mapStateToProps = (state: RootState) => {
  return {
    userList: state.user.userList
  }
}

// Connect Redux and React using our values and "view!"
export default connect(
  mapStateToProps,
  { signUp }
)(Register);
