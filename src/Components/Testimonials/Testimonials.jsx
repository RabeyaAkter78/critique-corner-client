import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
    return (
        <div className="mb-32">
            <div className="font-semibold text-xl my-20">
                <p>What customers say about <br />CRITIQUE CORNER ?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#C1DCDC] text-center rounded-xl">
                    <p className="px-8 py-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla qui placeat libero, numquam dolorem consequatur magni fugiat incidunt consequuntur suscipit aliquam natus quidem! Laboriosam aliquam, in sapiente expedita fugiat, voluptatibus quia, veniam magni porro nobis quas nihil fuga ipsum dolorum ad consequuntur a corrupti rerum maxime. Nostrum, ratione sunt!</p>

                    <div className="flex justify-around items-center">
                        <div className="flex justify-center items-center">
                            <FaQuoteLeft></FaQuoteLeft>
                            <img src="/t-1 (1).png" alt="" />
                        </div>
                        <h1 className="font-bold">John Doe <br />Youtuber</h1>
                        <p className="flex gap-2 justify-center items-center"><FaStar></FaStar> 4.5</p>
                    </div>

                </div>
                <div className="bg-[#C1DCDC] text-center rounded-xl">
                    <p className="px-8 py-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla qui placeat libero, numquam dolorem consequatur magni fugiat incidunt consequuntur suscipit aliquam natus quidem! Laboriosam aliquam, in sapiente expedita fugiat, voluptatibus quia, veniam magni porro nobis quas nihil fuga ipsum dolorum ad consequuntur a corrupti rerum maxime. Nostrum, ratione sunt!</p>

                    <div className="flex justify-around items-center">
                        <div className="flex justify-center items-center">
                            <FaQuoteLeft></FaQuoteLeft>
                            <img className="mt-4" src="/t-1 (2).png" alt="" />
                        </div>
                        <h1 className="font-bold">John Doe <br />Youtuber</h1>
                        <p className="flex gap-2 justify-center items-center"><FaStar></FaStar> 4.5</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonials;