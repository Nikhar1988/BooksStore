import { createContext } from 'react';

const {
    Provider: BookstoreServiceProvoder,
    Consumer: BookstoreServiceConsumer
} = createContext();

export {
    BookstoreServiceProvoder,
    BookstoreServiceConsumer
}