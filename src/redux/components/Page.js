import React, { Component } from 'react';
import { add, toggle } from '../action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * mapStateToProps是一个函数，用于建立组件跟 store 的 state 的映射关系
 * 作为一个函数，它可以传入两个参数，结果一定要返回一个 object
 * 传入mapStateToProps之后，会订阅store的状态改变，在每次 store 的 state 发生变化的时候，都会被调用
 * ownProps代表组件本身的props，如果写了第二个参数ownProps，那么当prop发生变化的时候，mapStateToProps也会被调用。
 * 例如，当 props接收到来自父组件一个小小的改动，那么你所使用的 ownProps 参数，mapStateToProps 都会被重新计算）。
 * mapStateToProps可以不传，如果不传，组件不会监听store的变化，也就是说Store的更新不会引起UI的更新 
 * 
 */
function mapStateToProps(state, ownProps) {
    return {
        store: state.reducer
    }
}

/**
 * mapDispatchToProps用于建立组件跟store.dispatch的映射关系,可以是一个object，也可以传入函数
 * 如果mapDispatchToProps是一个函数，它可以传入dispatch,ownProps, 定义UI组件如何发出action，
 * 实际上就是要调用dispatch这个方法
 */
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

/**
 * 使用bindActionCreator，可以直接将action包装成可以被调用的函数。 
 * */
// const mapDispatchToProps = {} = (dispatch, ownProps) => {
//     return bindActionCreators({
//         add,
//         toggle
//     }, dispatch);
// }


@connect(mapStateToProps, mapDispatchToProps)
class Page extends Component {
    constructor(props) {
        super(props);
    }

    _onCheck = (item) => {
        this.props.toggle(item);
    }

    _renderItem = (item, index) => {
        return (
            <li key={index}>
                <input type="checkbox" checked={item.checked} onChange={() => {
                    this._onCheck(item);
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