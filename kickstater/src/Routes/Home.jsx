import Navbar from "./Navbar";
import { PriceingHoga } from "./PriceingHTm";
import { ProductListing } from "./ProductLIsting";

function Home(){
    return(
        <div>
          <Navbar/>
          <ProductListing/>
          <PriceingHoga/>
        </div>
    )
}


export default Home;