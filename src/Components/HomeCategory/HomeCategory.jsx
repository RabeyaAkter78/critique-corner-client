import { FaArrowRight } from "react-icons/fa";
import SectionTitle from "../SectionTitle/SectionTitle";
import SearchProduct from "../SearchProduct/SearchProduct";

const HomeCategory = () => {
    return (
        <div>
            <SectionTitle
                heading={"Categories"}
                subHeading={"Find what you are looking for"}>
            </SectionTitle>
            <div className="">
                <SearchProduct></SearchProduct>
                <div className="bg-[#C1DCDC] mt-28 mb-20 ">
                    <div className=" grid grid-cols-1 md:grid-cols-3  gap-4">
                        <div className=" w-96 text-center font-semibold">
                            <figure><img src="/Frame 36.png" className="p-4 -mt-16" alt="Natural Plants" /></figure>
                            <p>Natural Plants</p>
                        </div>
                        <div className=" w-96 text-center font-semibold">
                            <figure><img src="/Frame 37.png" className="p-4 mt-16" alt="Natural Plants" /></figure>
                            <p>Plant Accessories</p>
                        </div>
                        <div className=" w-96 text-center font-semibold">
                            <figure><img src="/Frame 38.png" className="p-4 -mt-16" alt="Natural Plants" /></figure>
                            <p>Artificial Plants</p>
                        </div>
                    </div>
                    <div className="text-center my-12">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro aut <br /> fugiat velit repellendus voluptate tempore nesciunt doloribus soluta illum eveniet.</p>
                        <button className="btn mb-20">Explore <FaArrowRight></FaArrowRight></button>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default HomeCategory;