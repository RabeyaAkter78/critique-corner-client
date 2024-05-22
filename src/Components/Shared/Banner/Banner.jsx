
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] mb-16 rounded-xl">
            <div id="slide1" className="carousel-item relative w-full bg-[#C1DCDC] flex flex-col lg:flex-row  justify-between items-center">

                <div className="absolute flex flex-col lg:flex-row items-center h-full md:left-0 md:top-0  md:bottom-0 rounded-xl ">
                    {/* <div className="absolute flex flex-col lg:flex-row items-center h-full md:left-0 md:top-0  md:bottom-0 rounded-xl "> */}
                    <div className='text-black  font-bold lg:space-y-7 lg:w-1/2 lg:pl-12 mb-4'>
                        <div className="mt-28">
                            <h2 className='text-xl p-2 md:text-6xl text-black font-bold'>
                                Express Yourself through Movement
                                at Dance Academy

                            </h2>
                            <p className='text-sm p-2 md:text-4xl '>Learn From The Best Dance professionals
                            </p>
                        </div>
                        <div className="w-1/2 md:full p-4">
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" className="grow" placeholder="What are you looking for?" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            </label>
                        </div>
                    </div>

                    <div className="md:mt-48 h-[300px] md:h-[400px] w-[325px] md:w-[450px] ml-60 md:ml-48 bg-black flex justify-center items-end" style={{ borderRadius: '200px 200px 0 200px' }}>
                        <img className="mb-4" src="img" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;