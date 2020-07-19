export function selectBook(book){
  //This is an action creator it needs to return an action which is
  // an object with a type property
  return{
    type: 'BOOK_SELECTED',
    payload: book
  };
}
