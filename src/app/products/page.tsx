import Header from "@/app/components/Header";
import Card from "@/app/components/card";
import productlist from "@/app/assets/data/productlist.json";

const products = () => {
  return (
    <div>
      <Header />
      {/* <Card/> */}
      
        <div className="card-list">
        {productlist.map((product)=> (
          <Card
            id={product.id}
            brand={product.brand}
            size={product.size}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      
    </div>
  );
};
export default products;
