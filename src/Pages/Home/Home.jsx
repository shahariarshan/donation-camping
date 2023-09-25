import { useLoaderData } from "react-router-dom";
import Banner from "../../Componant/Header/Banner/Banner";
import Cards from "../../Componant/Cards/Cards";




const Home = () => {
    const donation =useLoaderData()
    // console.log(items);
    return (
        <div>
         <Banner></Banner>
        <div>
            {
                 <Cards donation={donation}></Cards>
            }
        </div>
        </div>
    );
};

export default Home;