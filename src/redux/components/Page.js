import React, { Component } from 'react';
import { add, toggle } from '../action';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
    return {
        store: state.reducer
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        add: (item) => {
            dispatch(add(item))
        },
        toggle: (item) => {
            dispatch(toggle(item))
        }
    }
}

@connect(mapStateToProps, mapDispatchToProps)
class Page extends Component {
    constructor(props) {
        super(props);
    }


    _renderItem = (item, index) => {
        return (
            <li key={index}>
                <input type="checkbox" checked={item.checked} onChange={() => {
                    this.props.toggle(item);
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
                <h1>Redux</h1>
                <div style={{ display: 'flex', alignItems: 'center', height: '40px', justifyContent: "center" }}>
                    <input type="button" value="添加一项" onClick={() => {
                        this.props.add({
                            name: 'name_' + list.length,
                            checked: false
                        });
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



export default Page;