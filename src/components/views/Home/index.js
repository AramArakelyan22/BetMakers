import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import socket from '../../../utils/socket';

import { getTheGames, loadGameDataSocket, logout } from '../../../actions/index';
import userIsAuthHoc from '../../common/AuthHoc/index';
import Header from './components/Header';
import { Games } from './components/Games';
import Pagination from './components/Pagination';

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      fetchingGames: true
    }
  }

  componentDidMount() {
    this.props.getTheGames();
    this.props.loadGameDataSocket(socket);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.games !== this.props.games) {
      this.setState({fetchingGames: false})
    }
  }
  changePage = data => {
    this.setState({fetchingGames: true});
    const {selected} = data;
    this.props.getTheGames(selected + 1);
  }


  render() {
    const { games, user, logout } = this.props;
    return (
      <Fragment>
        <Header
          logout={logout}
          {...user}
        />
        <Games
          fetchingGames={this.state.fetchingGames}
          games={games}
        />
        <Pagination
          changePage={this.changePage}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = state =>{
  return  {
    user: state.authReducer.user,
    games: state.homeReducer.games
  }
};

export default connect(mapStateToProps, {getTheGames, loadGameDataSocket, logout})(userIsAuthHoc(Home));
