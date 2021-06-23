
const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 220
};

const updateCartItems = (cartItems, item, idx) => {
  if (idx === -1) {
    return [
      ...cartItems,
      item
    ]
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ]
}

const updateCartItem = (book, item = {}) => { //если item undefaind  то тогда сработает пустой объект
  
  const {id = book.id, count = 0, title = book.title, total = 0} = item; // если item пустой объект то тогда сработает
  
    return { // выполняется если item undefaind т.е. = мы не нашли ниодного элемента с таким индексом
        id,
        title,
        count:count +  1,
        total:total +  book.price
      }
} 


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOK_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      }

    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      };
      case 'BOOK_ADDED_TO_CART':
      const bookId = action.payload; //передаем id элемента на который нажали
      const book = state.books.find((book) => book.id === bookId); // Метод find() возвращает значение первого найденного в массиве элемента, а элементы в масиве это объекты по соблюдению условия будет возврвщвть нужный объект
      const index = state.cartItems.findIndex( item => item.id === bookId); // findIndex(), который возвращает индекс найденного в массиве элемента вместо его значения. Получаем индекс найденого в массиве элемента
      const item = state.cartItems[index]; // находим элемент по индексу
      const newItem = updateCartItem(book, item);
      
      return { // элемент у нас есть мы вырезаем старый и добавляем новый
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, index)
      };
    
      
    
      

    default:
      return state;
  };
};

export default reducer;
