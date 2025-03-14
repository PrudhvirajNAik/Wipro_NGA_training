import { useDispatch, useSelector } from 'react-redux';
import { RemoveFromWishlist } from '../redux/actions/WishListActions';

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.wishlist);

  return (
    <div className="row">
      {wishlist.map(product => (
        <div key={product.id} className="col-md-4 mb-4">
          <div className="card">
            <img src={product.image} alt={product.title} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">${product.price}</p>
              <button className="btn btn-danger" onClick={() => dispatch(RemoveFromWishlist(product))}>Remove ❌</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
