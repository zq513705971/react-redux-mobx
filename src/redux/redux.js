import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';

import Page from './components/Page';

let store = configureStore();

//对store.dispatch进行改造
let next = store.dispatch;
store.dispatch = function (action) {
    console.log('dispatching', action);
    next(action);
    console.log('next state', store.getState());
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <Page name={"redux"} />
            </Provider>
        );
    }
}

export default App;