
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
      console.log(book)
      const item = state.cartItems[index]; // находим элемент по индексу
      let newItem;
      if(item) { // получается если мы нашли элемент в массиве и он  не undefaind то тогда мы изменяем этот элемент
        newItem = {
          ...item,
          count: item.count + 1,
          total: item.total + book.price
        }
      } else  {
         newItem = { // выполняется если item undefaind т.е. = мы не нашли ниодного элемента с таким индексом
            id: book.id,
            title: book.title,
            count: 1,
            total: book.price
          }
        } 
      
    if ( index < 0 ) {
      return { // если у нас нет данного элемента то мы его добавляем
        ...state,
        cartItems:  [
          ...state.cartItems,
          newItem
        ]
      }
    } else {
      return { // элемент у нас есть мы вырезаем старый и добавляем новый
        ...state,
        cartItems: [
          ...state.cartItems.slice(0, index),
          newItem,
          ...state.cartItems.slice(index + 1)
        ]
      }
    }
      
    
      

    default:
      return state;
  }
};

export default reducer;
