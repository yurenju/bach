import React, { PureComponent } from 'react';
import {
  Card,
  CardBody,
  CardGroup,
  CardHeader
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { ROLE_TYPE } from '../constants/Constant';
import RoleCard from '../components/RoleCard';

class PlayerType extends PureComponent {

  handlePlayerTypeChoosed = (e) => {
    const type = e.target.dataset.type;
    switch (type) {
      case ROLE_TYPE.CONDUCTOR:
      case ROLE_TYPE.MUSICIAN:
        this.props.history.push(`/${type}`);
        break;
      default:
        console.warn(`wrong player type got: ${type}`);
    }
  }

  render() {
    const code = this.props.location.state.code;
    return (
      <Card>
        <CardHeader>
          Choose a role! (Room Code: {code})
        </CardHeader>
        <CardBody>
          <CardGroup>
            <RoleCard
              buttonColor='info'
              buttonText='Be a Conductor'
              description='A conductor chooses a song and conducts musicians to play the song.'
              name='Conductor'
              type={ROLE_TYPE.CONDUCTOR}
              onClick={this.handlePlayerTypeChoosed} />
            <RoleCard
              buttonColor='success'
              buttonText='Be a Musician'
              description='A musician plays instruments for everyone.'
              name='Musician'
              type={ROLE_TYPE.MUSICIAN}
              onClick={this.handlePlayerTypeChoosed} />
          </CardGroup>
        </CardBody>
      </Card>
    );
  }
}

export default withRouter(PlayerType);
