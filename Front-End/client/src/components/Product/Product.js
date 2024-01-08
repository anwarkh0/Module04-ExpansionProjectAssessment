// ProductCard.jsx
import React from 'react';
import Styles from "./Product.module.css"
import { Link } from 'react-router-dom';
const ProductCard = ({ data }) => {
    return (
        <Link to={`/product/${data.id}`}>
            <div className={Styles.product}>
                <h2><strong>Title:</strong>title</h2>
                <p><strong>Category:</strong> category</p>
                <p><strong>Description:</strong> description</p>
                <p><strong>Price:</strong> $price</p>
                <p><strong>Supplier:</strong> supplier</p>
            </div>
        </Link>
    );
};

export default ProductCard;