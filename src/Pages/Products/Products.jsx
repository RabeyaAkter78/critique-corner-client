import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

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
    }, []);
    const handleDetailsClick = (product) => {
        setSelectedProduct(product);
        document.getElementById('product_modal').showModal();
    };


    return (
        <div className="mb-50 ">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-48">
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

            </div> */}

            <div className="overflow-x-auto">
                <table className="table mt-36 mb-20">
                    {/* head */}
                    <thead>
                        <tr >
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Average Ratings</th>
                            <th>Price</th>
                            <th>View Details</th>
                            <th>FeedBack</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((data, index) => <tr key={data._id} className="hover">
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={data.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>{data.name}</td>
                                <td>{data.category}</td>
                                <td>{data.averageRating}</td>
                                <td>${data.price}</td>

                                <th>
                                    <button className="btn border-2 btn-xs bg-[#C1DCDC]" onClick={() => handleDetailsClick(data)}>Details</button>
                                </th>
                                <th>
                                    <Link to='/makeReview' state={data}>
                                        <button className="btn  bg-[#C1DCDC] border-white  border-2 btn-xs">Review</button>
                                    </Link>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {selectedProduct && (
                <dialog id="product_modal" className="modal ">
                    <div className="modal-box bg-[#C1DCDC] font-semibold text-neutral-700">
                        <figure><img className="p-4 border-2 mx-auto rounded-xl mb-2" src={selectedProduct.image} alt={selectedProduct.name} /></figure>
                        <h2 className="card-title">Product Name: {selectedProduct.name}</h2>
                        <p>Price: ${selectedProduct.price}</p>
                        <p className="flex gap-2 items-center">Average Rating: {selectedProduct.averageRating} <FaStar></FaStar></p>
                        <p>category: {selectedProduct.category}</p>
                        <p>Availability: {selectedProduct.availability}</p>
                        {selectedProduct.specifications && (
                            <div>
                                <u>Specifications:</u>
                                <ul>
                                    <li>Material: {selectedProduct.specifications.material}</li>
                                    {selectedProduct.specifications.sizesAvailable && (
                                        <li>
                                            Sizes Available: {selectedProduct.specifications.sizesAvailable.join(", ")}
                                        </li>
                                    )}
                                    <li>Color: {selectedProduct.specifications.color}</li>
                                </ul>
                            </div>
                        )}

                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default Products;