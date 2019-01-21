import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';

/**
 * redux-thunk 是一个比较流行的 redux 异步 action 中间件
 * redux-thunk中间件可以让action创建函数先不返回一个action对象，而是返回一个函数，
 * 函数传递两个参数(dispatch,getState),在函数体内进行业务逻辑的封装
 */
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

/* 
 * store是一个全局对象，将action和reducer以及state联系在一起
*/
export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(reducers, initialState)
    return store;
}