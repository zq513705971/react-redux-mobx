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
 * 使用bindActionCreator，可以直接将action包装成可以被调用的函数。 
 * */
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return bindActionCreators({
//         add,
//         toggle
//     }, dispatch);
// }


@connect(mapStateToProps)
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