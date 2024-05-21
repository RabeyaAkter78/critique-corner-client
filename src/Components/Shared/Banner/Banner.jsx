import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px] mb-16 rounded-xl">
                <div id="slide1" className="carousel-item relative w-full bg-[#C1DCDC] flex">
                    {/* <img src="../../../assets/img/unsplash_cLaaxa4DSnc-removebg-preview 1.png" /> */}
                
                    <div className="absolute flex items-center h-full left-0 top-0  bottom-0 rounded-xl ">
                        {/* <div className="absolute flex items-center h-full left-0 top-0  bottom-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]"> */}
                        <div className='text-black font-bold lg:space-y-7 lg:w-1/2 lg:pl-12'>
                            <h2 className='text-xl md:text-6xl text-black font-bold'>
                                Express Yourself through Movement
                                at Dance Academy

                            </h2>
                            <p className='text-sm md:text-4xl'>Learn From The Best Dance professionals
                            </p>
                            <div>
                                <Link to="/classes">
                                    <button className="btn btn-outline border-0 border-y-2 btn-error mt-6 md:mt-3">Take A Tour</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;