import AboutUs from "../../Components/AboutUs/AboutUs";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import Banner from "../../Components/Shared/Banner/Banner";

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <FeaturedProducts></FeaturedProducts>
         <AboutUs></AboutUs>
        </div>
    );
};

export default Home;