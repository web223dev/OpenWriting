import React, { Component } from 'react';
import * as header from '../redux/modules/base/header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
  componentDidMount(){
    // const { HeaderActions } = this.props;
    // HeaderActions.example(false);
  }
 
  render() {
    return (
      <div>
        <h1>It's working...</h1>
      </div>
    );
  }
}

export default App;
// export default connect(
//   state => ({
//     status: {
//       something: state.base.header.get('something')
//     }
//   }),
//   dispatch => ({
//     HeaderActions: bindActionCreators(header, dispatch)
//   })
// ) (App);