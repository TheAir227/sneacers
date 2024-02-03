import Banner from "../components/Banner/Banner"
import Search from "../components/Search/Search"
import Product from "../components/Product/Product"
import { products } from "../data"
export default function HomePage() {
  return (
    <>
      
        <div className="line">
        </div>
        <div className="container">
          <Banner />
          
          
          
          <Search />

          
          <div className="products">
            <Product  {...products[0]} />
            <Product  {...products[1]} />
            <Product  {...products[2]} />
            <Product  {...products[3]} />
            <Product  {...products[4]} />
            <Product  {...products[5]} />
            <Product  {...products[6]} />
            <Product  {...products[7]} />
          </div>

        </div>

    </>
  )
  
}
