const updateShoppingCart = (state, action) => {
  
    if (state === undefined) {
      return {
        cartItems: [],
        orderTotal: 0
      }
    }
  
    switch(action.type) {
      case 'BOOK_ADDED_TO_CART':
      return bookOrder(state,action.payload, 1);
    
    case 'BOOK_REMOVE_TO_CART':
      return bookOrder(state,action.payload, -1);
    
    case 'ALL_BOOK_REMOVE_TO_CART':
        const item = state.shoppingCart.cartItems.find(({id})=> id === action.payload)
      return bookOrder(state, action.payload, -item.count);
    
      default: 
        return state.shoppingCart;
    }
  }
  
  const updateCartItems = (cartItems, item, idx) => {
    if(item.count === 0) {
      return [
        ...cartItems.slice(0, idx),
        ...cartItems.slice(idx + 1)
      ]
    }
    
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
  
  const updateCartItem = (book, item = {}, quanity ) => { //если item undefaind  то тогда сработает пустой объект
    
    const {id = book.id, count = 0, title = book.title, total = 0} = item; // если item пустой объект то тогда сработает
    
      return { // выполняется если item undefaind т.е. = мы не нашли ниодного элемента с таким индексом
          id,
          title,
          count:count +  quanity,
          total:total +  quanity*book.price
        }
  } 
  
  const bookOrder =( state, bookId, quanity ) => {
        const {shoppingCart:{cartItems}, bookList:{books}} = state;
        const book = books.find((book) => book.id === bookId); // Метод find() возвращает значение первого найденного в массиве элемента, а элементы в масиве это объекты по соблюдению условия будет возврвщвть нужный объект
        const index = cartItems.findIndex( item => item.id === bookId); // findIndex(), который возвращает индекс найденного в массиве элемента вместо его значения. Получаем индекс найденого в массиве элемента
        const item = cartItems[index]; // находим элемент по индексу
        const newItem = updateCartItem(book, item, quanity);
        
        return { // элемент у нас есть мы вырезаем старый и добавляем новый
          orderTotal: 0,
          cartItems: updateCartItems(cartItems, newItem, index)
        };
  }

  export default updateShoppingCart;
 