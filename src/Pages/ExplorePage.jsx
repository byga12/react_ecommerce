import React, { useState, useEffect } from "react";
import firebase from "../Config/firebase";
import { ExplorerNavigation } from "../Components/ExplorerNavigation";
import { Product } from "../Components/Product";
export const Explore = () => {
  const [productList, setProductList] = useState([]);
  const [fixedProductList, setfixedProductList] = useState([]);
  const getActiveOptions = (activeOptions) => {
    // console.log(activeOptions);
    if (!activeOptions.length) {
      setProductList(fixedProductList);
      return;
    }
    const newProductList = fixedProductList.filter((product) => {
      let res = false;
      product.tags.forEach((tag) => {
        if (activeOptions.includes(tag)) {
          res = true;
        }
      });
      return res;
    });
    setProductList(newProductList);
  };
  useEffect(() => {
    (async () => {
      const querySnapshot = await firebase.firestore
        .collection("products")
        .get();
      const products = await querySnapshot.docs.map((product) =>
        product.data()
      );
      setProductList(products);
      setfixedProductList(products);
    })();
  }, []);

  return (
    <>
      <div className="p-7 py-20 bg-black text-white sm:p-20">
        <h2 className="mb-6 text-5xl text-center">Explore</h2>
        <h3 className="text-center text-2xl">
          +5.000 handmade products from people around the globe.
        </h3>
      </div>

      <ExplorerNavigation getActiveOptions={getActiveOptions} />

      <div className="p-7 pt-16 lg:p-10 lg:pt-16 m-auto w-4/5">
        <div className="flex flex-wrap gap-8 justify-center">
          {productList.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              imageURL={product.imageURL}
              price={product.price}
              discount={product.discount}
              tags={product.tags}
              id={product.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};
