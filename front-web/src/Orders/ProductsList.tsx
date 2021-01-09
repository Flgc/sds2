import ProductsCard from "./ProductCard";

function ProductsList(){
   return(
      <div className="orders-list-container">
         <div className="orders-list-items">
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
         </div>
      </div>
   )
}

export default ProductsList;