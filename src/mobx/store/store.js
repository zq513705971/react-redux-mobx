import { observable, action, computed } from 'mobx';

class Store {
    @observable list = [];

    constructor() {
        var _list = [];
        for (let index = 0; index < 3; index++) {
            _list.push({
                name: 'name_' + index,
                checked: false
            });
        }
        this.list = _list;
    }

    @action
    Add = (item) => {
        this.list.push(item);
    }
}

let store = new Store();

export { store };