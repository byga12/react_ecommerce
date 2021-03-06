import React, { useEffect, useState } from "react";
import firebase from "../Config/firebase";
// COMPONENTS
import { Product } from "../Components/Product";

// IMAGES
import hero from "../Images/hero.png";

export const Home = () => {
  const [onSaleProductsList, setOnSaleProductsList] = useState([]); //este estado contendrĂ¡ un array con los productos que solamente tienen descuento (On sale tag)
  useEffect(() => {
    (async () => {
      //consultar Firestore, filtrar por productos con descuento, cambiar estado
      const querySnapshot = await firebase.firestore
        .collection("products")
        .get();
      const products = await querySnapshot.docs.map((product) =>
        product.data()
      );
      const productsWithDiscount = products.filter(
        (product) => product.discount
      );
      setOnSaleProductsList(productsWithDiscount);
    })();
  }, []);

  return (
    <>
      <div className="flex items-center justify-start relative overflow-hidden">
        {/* <img
          className="filter brightness-40 opacity-20 "
          src={hero}
          alt="black and white clothes on a coat rack"
        /> */}

        <div
          className="p-3 text-5xl sm:text-6xl md:textl-7xl font-bold w-full flex items-center md:justify-center"
          style={{
            width: "100%",
            minHeight: "90vh",
            backgroundImage: `url(${hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <ul>
            <li>buy, sell and gift at reasonable prices.</li>

            <li>International shipping.</li>

            <li>1 year warranty.</li>
          </ul>
        </div>
      </div>

      <div className="w-4/5 p-10 py-16 mx-auto">
        <h2 className="text-xl text-center mb-12">ON SALE</h2>

        <div className="flex flex-wrap justify-center gap-3">
          {onSaleProductsList.map((product) => (
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
