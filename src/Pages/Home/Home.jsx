import AboutUs from "../../Components/AboutUs/AboutUs";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import HomeCategory from "../../Components/HomeCategory/HomeCategory";
import Banner from "../../Components/Shared/Banner/Banner";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
         <Banner></Banner>

         <FeaturedProducts></FeaturedProducts>
         <AboutUs></AboutUs>
         <HomeCategory></HomeCategory>

         <Testimonials></Testimonials>
        </div>
    );
};

export default Home;