import React, {Component} from 'react';
import {View} from 'react-native';
import api from '../../services/api';

// import { Container } from './styles';

export default class User extends Component {
  state = {
    stars: [],
  };

  async componentDidMount() {
    const {navigation, route} = this.props;
    const user = route.params.user;

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({stars: response.data});
  }

  render() {
    const {stars} = this.state;

    return <View />;
  }
}
