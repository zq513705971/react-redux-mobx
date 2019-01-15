import React, { Component } from 'react';
import { observer, inject } from "mobx-react";

@inject(["store"]) // 注入对应的store
@observer
export default class Page extends Component {
    constructor(props) {
        super(props);
    }

    _onCheck = (item) => {
        item.checked = !item.checked;
    }

    _renderItem = (item, index) => {
        return (
            <li key={index}>
                <input type="checkbox" checked={item.checked} onChange={() => {
                    this._onCheck(item)
                }} />
                <span style={{ textDecoration: item.checked ? "line-through" : "none" }}>{
                    JSON.stringify(item)
                }</span>
            </li>
        );
    }

    render() {
        var { store } = this.props;
        var { list } = store;
        return (
            <div style={{ flex: 1, flexDirection: 'column' }}>
                <h1>Mobx</h1>
                <div style={{ display: 'flex', alignItems: 'center', height: '40px', justifyContent: "center" }}>
                    <input type="button" value="添加一项" onClick={() => {
                        list.push(
                            {
                                name: 'name_' + list.length,
                                checked: false
                            }
                        );
                    }} />
                </div>
                <ul className="list-item">
                    {
                        list.map((item, index) => {
                            return this._renderItem(item, index);
                        })
                    }
                </ul>
            </div>
        );
    }
}