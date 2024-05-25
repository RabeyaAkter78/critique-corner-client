import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { Dropdown, DropdownItem } from 'daisyui';
const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isSort, setSort] = useState(true)

    const [likes, setLikes] = useState(false)

    const handleLikes = () => {
        setLikes(true);
        toast.success('Thank you for liking it!');
    }


    // load all product:
    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch(`https://critique-corner.vercel.app/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log(data);
            });

        setLoading(false);
    }, []);
    // load modal:
    const handleDetailsClick = (product) => {
        setSelectedProduct(product);
        document.getElementById('product_modal').showModal();
    };
    // filter and sort:
    useEffect(() => {
        fetch(`https://critique-corner.vercel.app/products?isSort=${isSort}`)
            .then(res => res.json())
            .then(data => { setProducts(data) })

    }, [isSort])


    return (
        <div className="mb-50 ">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {/* filter and sort start */}
            {/* <div className="filters mb-4 bg-red-500">
                {<button
                    className="p-2 mt-20 text-green-600 text-lg mb-2 bg-red-100 rounded-lg"
                    onClick={() => setSort(!isSort)}>
                    {isSort ? 'Low To High' : 'High To Low'}
                </button>
                }
            </div> */}
            {/* Show all product as a table */}
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

                        <div className="modal-action flex gap-2">
                            <span><button className="btn flex gap-1 items-center" onClick={handleLikes}  ><FaHeart></FaHeart> Favourite  </button>
                                <Toaster />
                            </span>

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