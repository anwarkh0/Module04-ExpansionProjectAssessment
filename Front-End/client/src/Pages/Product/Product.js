import { useParams } from "react-router-dom";
import Styles from './Product.module.css'
import loader from '../../Assest/Images/download.png'
import axios from "axios";
import { useState, useEffect } from 'react'
const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        const fetchProduct = async () => {
            setisLoading(true)
            try {
                const response = await axios.get(`http://localhost:5000/product/getOne/${id}`)
                if (product) {
                    setProduct(response.data.data)
                    setisLoading(false)
                }
                else {
                    setProduct(null)
                    setisLoading(false)
                }
            }
            catch (err) {
                setisLoading(false)

            }
        }
        fetchProduct();
    }
    , [])
    console.log("firiri",product)


    const renderContent = () => {
        if (isLoading) return <div /*  */><img src={loader} alt="loading" /></div>;
        // if (isError) return <Error />;
        if (product && !isLoading) return (
            <article >

                <div >
                    <header>
                        <h1>{product.title}</h1>
                        <p><span>by </span>{`${product.firstName} ${product.lastName}`}</p>
                        <p><span>price </span>{product.price}</p>
                    </header>
                    <section >
                        {product.descrition}
                    </section>
                </div>
            </article>);

        // This is the default component if none of the conditions above are met
        return <div className={Styles.container}><h1>No Article found</h1></div>;
    };

    return (
        renderContent()
    )
}

export default Product