export const ADD = 'ADD';
export const TOGGLE = 'TOGGLE';

export const add = (item) => ({
    type: ADD,
    item
}
)
export const toggle = (item) => ({
    type: TOGGLE,
    item
})