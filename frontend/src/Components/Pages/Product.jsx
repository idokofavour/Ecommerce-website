import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Breadcrum/Breadcrum";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import DescriptionBox from "../DescriptionBox/DescriptionBox";
import RelatedProduct from "../RelatedProducts/RelatedProduct";

export default function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const partParams = useParams()
  {console.log(partParams)}

  const product = all_product.find((e) => e.id === Number(productId));
 
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox  />
      <RelatedProduct />
    </div>
  );
}
 