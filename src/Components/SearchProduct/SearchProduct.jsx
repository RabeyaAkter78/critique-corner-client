import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const SearchProduct = () => {
    // const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  

    const handleSearch = () => {
        setLoading(true);
        setError(null);
        fetch(`https://critique-corner.vercel.app/products/${search}`)
            .then(res => res.json())
            .then(data => {
                setSearchResults(data);
                // console.log(data);
            });

        setLoading(false);
    }

    const handleClearResults = () => {
        setSearchResults([]);
        setSearch("");
    };
    return (
        <div className=" my-8 p-4 rounded-xl">
            <label className="input input-bordered flex items-center gap-2 bg-[#C1DCDC]">
                <input type="search"
                    className="grow "
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="What are you looking for?" />

                <button onClick={handleSearch}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></button>

            </label>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {searchResults.map(data => <div key={data._id} >
                    <div className="card w-96 h-full bg-[#C1DCDC] mt-8 p-4 shadow-xl">
                        <figure><img className="p-4  border-white border-2" src={data.image} alt="image" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Name: {data.name}</h2>
                            <p>Price: ${data.price}</p>
                            <p> Category:{data.category}</p>
                            <p>Availability: {data.availability}</p>
                            <p className="flex gap-2 items-center ">Average Rating: {data.averageRating} <FaStar></FaStar> </p>
                            <div className="flex card-actions justify-end">
                                <Link to="/makeReview">
                                    <button className="btn"  >Review</button>
                                </Link>
                                {searchResults.length > 0 && (
                                    <button className="btn " onClick={handleClearResults}>Close</button>
                                )}

                            </div>
                        </div>
                    </div>
                </div>)}

            </div>
        </div>
    );
};

export default SearchProduct;