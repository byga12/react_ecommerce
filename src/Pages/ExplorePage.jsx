import React, { useState, useEffect } from "react";
import firebase from "../Config/firebase";
import { ExplorerNavigation } from "../Components/ExplorerNavigation";
import { Product } from "../Components/Product";
export const Explore = () => {
  const [fixedProductList, setfixedProductList] = useState([]); //Este estado contendra siempre un array con todos los productos
  const [productList, setProductList] = useState([]); //Este estado contendra un array con todos los productos pero que podrá ser filtrado e ir cambiando.

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

  //función que se encarga de obtener los filtros activos y actualizar la lista
  const getActiveOptions = (activeOptions) => {
    //en caso de que el array que recibe esta vacio (no hay ningún filtro activo), muestra todos los productos y retorna
    if (!activeOptions.length) {
      setProductList(fixedProductList);
      return;
    }
    //esta variable contendrá los productos que cumplan con los filtros.
    const newProductList = fixedProductList.filter((product) => {
      let res = false;
      product.tags.forEach((tag) => {
        if (activeOptions.includes(tag)) {
          res = true;
        }
      });
      return res;
    });
    // cambio la lista de productos
    setProductList(newProductList);
  };

  return (
    <>
      <div className="p-7 py-20 bg-black text-white sm:p-20">
        <h2 className="mb-6 text-5xl text-center">Explore</h2>
        <h3 className="text-center text-2xl">
          +5.000 handmade products from people around the globe.
        </h3>
      </div>

      {/* Pasa la función para obtener los filtros activos */}
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
