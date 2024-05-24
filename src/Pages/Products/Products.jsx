import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log(data);
            });

        setLoading(false);
    }, [])

    return (
        <div className="mb-50">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-48">
                {products.map(data => <div  key={data._id} >
                    <div className="card w-96 h-full mt-28 bg-[#C1DCDC] p-4 shadow-xl">
                        <figure><img className="p-4  border-white border-2" src={data.image} alt="image" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Name: {data.name}</h2>
                            <p>Price: ${data.price}</p>
                            <p> Category:{data.category}</p>
                            <p>Availability: {data.availability}</p>
                            <p className="flex gap-2 items-center ">Average Rating: {data.averageRating} <FaStar></FaStar> </p>
                            <div className="flex card-actions justify-end">
                                <Link to="/makeReview">
                                    <button className="btn"  >Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>)}

            </div>
        </div>
    );
};

export default Products;