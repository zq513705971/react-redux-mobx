export const ADD = 'ADD';
export const TOGGLE = 'TOGGLE';

/**
 * Action就是一个对象，一个必须带key为type的对象[value是自己定义的]，其他的key就根据用户自己定义:
 */

export const add = (item) => ({
    type: ADD,
    item
})

export const toggle = (item) => ({
    type: TOGGLE,
    item
})