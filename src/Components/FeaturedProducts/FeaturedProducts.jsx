import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import SectionTitle from '../SectionTitle/SectionTitle';
import { FaArrowRight } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
    return (
        <div>
            <SectionTitle
                heading={"Best Selling Products"}
            ></SectionTitle>
            <div className='w-full flex flex-col md:flex-row gap-4 md:my-4 '>
                <div className='w-full md:w-1/3 md:mt-4 p-2'>
                    <h1 className='text-4xl font-semibold md:mt-4 md:mb-8' >Best Selling <br /> Plants</h1>
                    <p className='md:mb-8'>Easiest way to healthy life by buying your favorite plants </p>
                    <Link to="/products">
                        <button className='btn md:btn-wide bg-[#C1DCDC] mt-4'>See More  <FaArrowRight /> </button>
                    </Link>
                </div>
                <div className=' w-full'>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper mb-24"
                    >
                        <SwiperSlide>
                            <img src="/slide-1.png" alt="" />
                            <h3 className=" mt-6 text-black font-semibold text-start">Natural Plants</h3>
                            <p className='text-neutral-600'>₱ 1,400.00</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/slide-2.png" alt="" />
                            <h3 className=" mt-6 text-black font-semibold text-start">Artificial Plants</h3>
                            <p className='text-neutral-600'>₱ 9,400.00</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/slide-3.png" alt="" />
                            <h3 className=" mt-6 text-black font-semibold text-start">Artificial Plants</h3>
                            <p className='text-neutral-600'>₱ 9,400.00</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/slide-1.png" alt="" />
                            <h3 className=" mt-6 text-black font-semibold text-start">Artificial Plants</h3>
                            <p className='text-neutral-600'>₱ 9,400.00</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/slide-2.png" alt="" />
                            <h3 className=" mt-6 text-black font-semibold text-start">Artificial Plants</h3>
                            <p className='text-neutral-600'>₱ 9,400.00</p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;