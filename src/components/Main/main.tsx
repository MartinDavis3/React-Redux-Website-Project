import * as React from 'react';
import Login from './login';
import Mainheader from './mainheader';
import Register from './signup'
import { Grid } from 'semantic-ui-react';

export interface IMainProps {
}

export default class Main extends React.Component<IMainProps> {
  public render() {
    return (
      <React.Fragment>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Login />
            </Grid.Column>
            <Grid.Column>
              <Mainheader/>
            </Grid.Column>
            <Grid.Column>
              <Register />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}
