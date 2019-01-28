import React from 'react';
import { Provider } from "mobx-react";
import store from "./store";

import Page from './components/Page';
import ShowCount from './components/ShowCount';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                 <div>
                    <Page name={"mobx"} />
                    <ShowCount />
                </div>
            </Provider>
        );
    }
}

export default App;
