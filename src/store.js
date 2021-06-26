import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

const logMiddleware = ({getState}) => (next)  => (action) => {
    console.log(action.type, getState());
    return next(action)
}

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {   
        return next({
            type: action   // next это dispatch будет принимать простые строки
        });
    }
    return next(action)
}

const store = createStore(reducer, applyMiddleware ( stringMiddleware, logMiddleware )); // applyMiddleware - добавляем из библиотеке redux, enhancer добавляется вторым аргументом, что бы в создаваемы store передались новые возможности

store.dispatch('Hello world') 

export default store;
