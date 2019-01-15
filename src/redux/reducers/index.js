import {
    combineReducers
} from 'redux';
import { ADD, TOGGLE } from '../action';

var _list = [];
for (let index = 0; index < 3; index++) {
    _list.push({
        name: 'name_' + index,
        checked: false
    });
}

const initValue = {
    list: _list
}

let reducer = (state = initValue, action) => {
    const { item } = action
    switch (action.type) {
        case ADD:
            return { ...state, list: [...state.list, item] };
        case TOGGLE:
            var list = [...state.list];
            list.map(_item => {
                if (_item.name === item.name) {
                    _item.checked = !_item.checked;
                }
            });
            return { ...state, list: list };
        default:
            return state
    }
}

export default combineReducers({
    reducer
});