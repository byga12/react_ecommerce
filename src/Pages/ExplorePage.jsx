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

  const sortProductsBy = (parameter) => {
    let sortedProductList;
    switch (parameter) {
      case "Lowest price":
        // el spread se utiliza para crear una copia del array, ya que si reordenamos el mismo array React no detectará cambios en el vDOM. (esto debido a que la referencia al array es la misma).
        sortedProductList = [
          ...productList.sort(function (a, b) {
            return (
              a.price -
              a.price * (a.discount / 100) -
              (b.price - b.price * (b.discount / 100))
            );
          }),
        ];
        setProductList(sortedProductList);
        break;
      case "Highest price":
        sortedProductList = [
          ...productList.sort((a, b) => {
            return (
              b.price -
              b.price * (b.discount / 100) -
              (a.price - a.price * (a.discount / 100))
            );
          }),
        ];
        setProductList(sortedProductList);
        break;
      case "A-Z":
        sortedProductList = [
          ...productList.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (b.name < a.name) return 1;
            return 0;
          }),
        ];
        setProductList(sortedProductList);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="p-7 py-20 bg-black text-white sm:p-20">
        <h2 className="mb-6 text-5xl text-center">Explore</h2>
        <h3 className="text-center text-2xl">
          +5.000 handmade products from people around the globe.
        </h3>
      </div>

      {/* Pasa la función para obtener los filtros activos y la función para ordenar productos según un parámetro */}
      <ExplorerNavigation
        getActiveOptions={getActiveOptions}
        sortProductsBy={sortProductsBy}
      />

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
