import { createStore, compose } from 'redux';
import reducer from './reducers';

const stringEnhancer = (createStore) => (...args) => { // создаем функцию enhancer в которую передаем createStore который будем изменять и передаем в него его предыдущие свойства
    const store = createStore(...args);
    const originalDispatch = store.dispatch; // сохраняем оригинальную функцию store.dispatch
    store.dispatch = (action) => { 
        if (typeof action === 'string') {   // это типо мы создали функционал который говорит что наш  dispatch бетет преобразовывать полученные данные под что нам надо
            return originalDispatch({
                type: action   // dispatch будет принимать простые строки
            });
        }
        return originalDispatch(action)   // если action не строкаб то нам надо обязательно вернуть  originalDispatch(action) 
    }
    return store; // возвращаем измененный store
};

const logEnhancer = (createStore) => (...args) => { // создаем функцию enhancer в которую передаем createStore который будем изменять и передаем в него его предыдущие свойства
    const store = createStore(...args);
    const originalDispatch = store.dispatch; // сохраняем оригинальную функцию store.dispatch
    store.dispatch = (action) => { 
        console.log(action.type);
        return originalDispatch(action)   // нам обязательно надо вернуть originalDispatch(action) в store.dispatch
    };
    return store; // возвращаем измененный store
}
const store = createStore(reducer, compose ( stringEnhancer, logEnhancer )); // compose - добавляем из библиотеке redux, enhancer добавляется вторым аргументом, что бы в создаваемы store передались новые возможности

store.dispatch('Hello world') 

export default store;
