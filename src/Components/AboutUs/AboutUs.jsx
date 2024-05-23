import SectionTitle from "../SectionTitle/SectionTitle";

const AboutUs = () => {
    return (
        <div>
            <SectionTitle
                heading={"About us"}
                subHeading={"Order now and appreciate the beauty of nature"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mt-12 mb-20">
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <figure className=" rounded-full h-20 w-20 mx-auto pt-4 bg-[#C1DCDC]">
                        <img src="../../../public/Vector.png" alt="img"   />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Large Assortment</h2>
                        <p className="text-neutral-700">we offer many different types of products with fewer variations in each category.</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl pt-4 mx-auto">
                    <figure className=" rounded-full h-20 w-20 mx-auto bg-[#C1DCDC]">
                        <img src="../../../public/Vector (1).png" alt="img"   />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Fast & Free Shipping</h2>
                        <p className="text-neutral-700">4-day or less delivery time, free shipping and an expedited delivery option.</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl pt-4 mx-auto">
                    <figure className=" rounded-full h-20 w-20 mx-auto bg-[#C1DCDC]">
                        <img src="../../../public/TelephoneOutbound.png" alt="img"   />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">24/7 Support</h2>
                        <p className="text-neutral-700">answers to any business related inquiry 24/7 and in real-time.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;