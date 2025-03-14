export const addToWishlist = (product) => {
    return {
      type: 'ADD_TO_WISHLIST',
      payload: product
    };
  };
  
  export const RemoveFromWishlist = (product) => {
    return {
      type: 'REMOVE_FROM_WISHLIST',
      payload: product
    };
  };
  