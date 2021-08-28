import React, { useEffect, useState } from "react";
import firebase from "../Config/firebase";
// COMPONENTS
import { Product } from "../Components/Product";

// IMAGES
import landing from "../Images/landing.jpg";

export const Home = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    (async () => {
      const querySnapshot = await firebase.firestore.collection("products").get();
      const products = await querySnapshot.docs.map((product) => product.data());
      const productsWithDiscount = products.filter(
        (product) => product.discount,
      );
      setProductList(productsWithDiscount);
    })();
  }, []);
  return (
    <>
      <div className="flex items-center justify-start relative overflow-hidden">
        <img className="filter brightness-40 opacity-20 " src={landing} alt="" />

        <div className="p-6 text-xl sm:p-20 sm:text-4xl md:text-6xl lg:text-7xl font-bold w-full absolute">
          <ul>
            <li>buy, sell and gift at reasonable prices.</li>

            <li>International shipping.</li>

            <li>1 year warranty.</li>
          </ul>
        </div>
      </div>

      <div className="w-4/5 p-10 py-20 mx-auto">
        <h2 className="text-xl text-center mb-16">ON SALE</h2>

        <div className="flex flex-wrap justify-center gap-3">
          {productList.map((product) => (
            <Product
              name={product.name}
              imageURL={product.imageURL}
              price={product.price}
              discount={product.discount}
              tags={product.tags}
            />
          ))}
        </div>
      </div>
    </>
  );
};
