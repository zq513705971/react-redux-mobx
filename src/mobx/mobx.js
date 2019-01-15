import React from 'react';
import { observer, inject } from "mobx-react";
import { Provider } from "mobx-react";
import store from "./store";

import Page from './components/Page';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <Page name={"mobx"} />
            </Provider>
        );
    }
}

export default App;
