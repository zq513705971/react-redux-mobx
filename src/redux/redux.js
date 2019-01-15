import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';

import Page from './components/Page';

let store = configureStore();
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