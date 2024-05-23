
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] mb-16 rounded-xl">
            <div id="slide1" className="carousel-item relative w-full bg-[#C1DCDC] flex flex-col lg:flex-row  justify-between items-center">

                <div className="absolute flex flex-col lg:flex-row items-center h-full md:left-0 md:top-0  md:bottom-0 rounded-xl ">
                    <div className='text-black  font-bold lg:space-y-7 lg:w-1/2 lg:pl-12 mb-4'>
                        <div className="mt-14 md:mt-2">
                            <h2 className='text-xl p-2 md:text-6xl text-black font-bold'>
                                BUY YOUR

                            </h2>
                            <p className='text-sm p-2 md:text-4xl '>DREAM PLANTS
                            </p>
                        </div>
                        <div className="flex gap-8 font-bold justify-normal">
                            <div>
                                <p className="text-3xl">50+</p>
                                <p>Plant Species</p>
                            </div>
                            <div className="border-r-2 border-black">
                            </div>
                            <div>
                                <p className="text-3xl">100+</p>
                                <p>Customers</p>
                            </div>
                        </div>


                        <div className="w-full md:full">
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" className="grow" placeholder="What are you looking for?" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            </label>
                            <img className="absolute w-34 md:w-[175px] h-16 md:h-[169.89px] top-80 md:top-[359.19px] left-16 md:left-[600px] border-4 md:rotate-53-14" src="/img -1.png" alt="" />

                            <img className="absolute w-34 md:w-[112.54px] h-24 md:h-[154.41px] top-36  md:top-10 left-96 md:left-[1137.24px] md:border-5 md:rotate--18-13" src="/img-2.png" alt="" />
                        </div>

                    </div>

                    <div className="mt-14 md:mt-48 h-[285px] md:h-[400px] w-[325px] md:w-[550px] ml-48 md:ml-96 bg-black flex justify-center items-end" style={{ borderRadius: '200px 200px 0 200px' }}>

                        <img className="" src="/img-3.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;