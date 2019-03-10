import React, { Component } from 'react';

const userIsAuthHoc = ( ChildComponent ) => {

  return class UserIsAuth extends Component {

    leavePage = () => {
      const { user } = this.props;

      if(user && Object.entries(user).length === 0 && user.constructor === Object) {
        this.props.history.push("/");
        return false
      }
    }

    componentWillMount() {
      this.leavePage()
    }

    componentWillReceiveProps(nextProps) {
      if(!nextProps.user && nextProps.user !== this.props.user) {
        this.props.history.push("/");
        return false
      }
    }

    render(){
      return (
        <ChildComponent {...this.props}/>
      )
    }
  }
};

export default userIsAuthHoc