import React, {useState,useEffect} from "react";
import axios from "axios";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch products on component mount
    useEffect(()=>{
        axios.get('http://localhost:5094/api/products')
        .then(response => {
            setProducts(response.data);
            setLoading(false);
        })
        .catch(err =>{
            setError('Failed to fetch products');
            setLoading(false);
        });
    },[]);
    //Handle delete product
    const handleDelete = (id) => {
        if(window.confirm('are you sure you want to delete this product?')) {
            axios.delete('http:localhost:5094/api/products/${id')
            .then(()=>{
                setProducts(products.filter(product => product.productId !== id));
            })
            .catch(err=>{
                alert('Failed to delete the products');
            });
        }
    };
    //Handle add product
    const handleAddProduct =()=> {
        const newProduct = {name:'new Product', price:15.99};
        axios.post('http://localhost:5094/api/products',newProduct)
        .then(response =>{
            setProducts([...products, response.data]);
            alert('Product added successfully!');
        })
        .catch(err=>{
            alert('Failed to add the product');
        });
    };

    if (loading) return <div>Loading...</div>
    if(error) return <div>{error}</div>

    return (
        <div>
            <h1>Product Inventory</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product=>(
                        <tr key={product.productId}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() =>handleDelete(product.productId)}>Delete</button>
                                < button className="btn btn-primary">Edit</button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button className="btn btn-success" onClick={handleAddProduct}>Add Product</button>

            </div>
        </div>
    );
};
export default ProductList;