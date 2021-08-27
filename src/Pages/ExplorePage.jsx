import React, { useState, useEffect } from "react";
import firebase from "../Config/firebase";
import { ExplorerNavigation } from "../Components/Navigation/ExplorerNavigation/ExplorerNavigation";
import { Product } from "../Components/Product";
export const Explore = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    (async () => {
      const querySnapshot = await firebase.firestore.collection("products").get();
      const products = await querySnapshot.docs.map((product) => product.data());
      setProductList(products);
    })();
  }, []);

  return (
    <>
      <div className="p-7 py-20 bg-black text-white sm:p-20">
        <h2 className="mb-6 text-5xl text-center">Explore</h2>
        <h3 className="text-center text-2xl">+5.000 handmade products from people around the globe.</h3>
      </div>

      <ExplorerNavigation />

      <div className="p-7 pt-16 lg:p-10 lg:pt-16 m-auto w-4/5">
        <div className="flex flex-wrap gap-8 justify-center">
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
