import React, { Component } from 'react';

import { observer, inject } from "mobx-react";

@inject(["store"])
@observer
class ShowCount extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var { store } = this.props;
        var { list } = store;
        return (
            <div style={{ flex: 1, flexDirection: 'column' }}>
               {list.length}
            </div>
        );
    }
}



export default ShowCount;