import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../redux/actions/WishListActions';


const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  useEffect(() => {
    dispatch(fetch());
  }, [dispatch]);

  return (
    <div className="row">
      {products.map(product => (
        <div key={product.id} className="col-md-4 mb-4">
          <div className="card">
            <img src={product.image} alt={product.title} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">${product.price}</p>
              <button className="btn btn-primary" onClick={() => dispatch(addToWishlist(product))}>Add to Wishlist ❤️</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
