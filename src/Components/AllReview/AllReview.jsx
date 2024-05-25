import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllReview = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // load all product:
    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch(`https://critique-corner.vercel.app/reviews`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                console.log(data);
            });

        setLoading(false);
    }, []);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table mt-36 mb-20">
                    {/* head */}
                    <thead>
                        <tr >
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Ratings</th>
                            <th>Review</th>
                            <th>FeedBack</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews?.map((data, index) => <tr key={data._id} className="hover">
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={data.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>{data.name}</td>
                                <td className="flex gap-2 items-center">{data.ratings}<FaStar></FaStar> </td>
                                <td>{data.description}</td>

                                <th>
                                    <Link to='/replay' state={data}>
                                        <button className="btn  bg-[#C1DCDC] border-white  border-2 btn-xs">Replay</button>
                                    </Link>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllReview;