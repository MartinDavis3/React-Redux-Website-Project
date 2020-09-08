import * as React from 'react';
import { Segment, Grid, Label, Image } from 'semantic-ui-react';
import { User } from '../../store/user/types';
import { RootState } from '../../store';
import { connect } from 'react-redux';

export interface IProfileCardProps  {
  displayingUserId: string;
  profilesCard: User[];
  loggedInUserId: number;
}

export class ProfileCard extends React.Component<IProfileCardProps> {
  constructor(props: IProfileCardProps) {
    super(props);
    this.state = {
      displayedUser: this.props.loggedInUserId
    }
  }
  
  public render() {

    let { displayingUserId, profilesCard, loggedInUserId } = this.props;

    if (loggedInUserId === 0  ) {
      return (
        React.Fragment
      );
    } else {

      let displayedUser = Number(displayingUserId);
      console.log ('displaying profile card for user: ' + displayedUser)
      let who = profilesCard[displayedUser-1].username;
      let info = profilesCard[displayedUser-1].userInformation;
      let pic='https://react.semantic-ui.com/images/avatar/large/'+profilesCard[displayedUser-1].userPictureName;
  
      return (            
        <Grid divided="vertically">
          <Segment>
            <Grid>
              <Segment>
                <Segment>
                  <Image src={pic}
                    // req
                    size='large' />
                </Segment>
                <Segment>
                  <Grid>
                    <Grid.Column>
                    </Grid.Column>
                    <Grid.Column  width={6}>
                      <Label color='green' size='huge'>Welcome </Label>
                    </Grid.Column>
                    <Grid.Column textAlign='center' width={8}> 
                      <Label size='huge' color='blue'>{who}!</Label>
                    </Grid.Column>
                  </Grid>
                </Segment>
                <Segment>
                  <Grid>
                    <Grid.Column>
                    </Grid.Column>
                    <Grid.Column  width={6}>
                      <Label color='purple' size='huge'>About Me: </Label>
                    </Grid.Column>
                    <Grid.Column textAlign='center' width={8}> 
                      <Label size='huge' color='blue'>{info} </Label>
                    </Grid.Column>
                  </Grid>
                </Segment>
              </Segment>
            </Grid>
          </Segment>
          <Grid.Column>
          </Grid.Column>
        </Grid>
      );
    }
  }
}

const mapStateToProps = (state: RootState) => {
    return {
        profilesCard: state.user.userList,
        loggedInUserId: state.user.loggedInUserId,

    };
};

export default connect(
    mapStateToProps,
    { }
  )(ProfileCard);
//   export default withRouter(connect(mapStateToProps)(Header));
