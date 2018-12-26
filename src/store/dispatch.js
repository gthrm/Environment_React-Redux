import { bindActionCreators } from 'redux';

import actions from './actions.js';

export default {
    mapStateToProps(state) {
        console.log('state, который пришел в mapStateToProps: ', state);
        return {
          name: state.name
        }
    },
    mapDispatchToProps(dispatch) {
        return {
          changeName: bindActionCreators(actions.changeName, dispatch),
          getInitialState: bindActionCreators(actions.getInitialState, dispatch)
        }
    }
}