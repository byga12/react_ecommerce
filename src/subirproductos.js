const descuentoRandom = (valoresPosibles) => {
  const numero = Math.ceil(Math.random() * valoresPosibles);
  if (numero <= 4) {
    return false;
  } else {
    return numero * 5;
  }
};

const precioRandom = (maxPrice) => {
  const numero = Math.ceil(Math.random() * maxPrice);
  return numero;
};

const nombreRandom = () => {
  const numero = Math.ceil(Math.random() * 6);
  let nombre = "";

  switch (numero) {
    case 1:
      nombre = "Musculosa";
      break;
    case 2:
      nombre = "Chomba";
      break;
    case 3:
      nombre = "Camisa";
      break;
    case 4:
      nombre = "Remera manga larga";
      break;
    case 5:
      nombre = "Remera manga corta";
      break;
    case 6:
      nombre = "Campera con capucha";
      break;
    default:
      break;
  }

  return nombre;
};

const filtroRandom = () => {
  const numero = Math.ceil(Math.random() * 6);
  let filtro;

  switch (numero) {
    case 1:
      filtro = "On sale";
      break;
    case 2:
      filtro = "Limited edition";
      break;
    case 3:
      filtro = "International shipping";
      break;
    case 4:
      filtro = "Free shipping";
      break;
    case 5:
      filtro = "Edición verano 2020";
      break;
    case 6:
      filtro = "Edición invierno";
      break;
    default:
      break;
  }

  return filtro;
};

const generarTagsArray = () => {
  const numero = Math.ceil(Math.random() * 6);
  let tagsArray;
  if (numero <= 3) {
    tagsArray = [];
  } else if (numero > 3 && numero < 5) {
    tagsArray = [filtroRandom()];
  } else {
    tagsArray = [filtroRandom(), filtroRandom()];
    if (tagsArray[0] === tagsArray[1]) {
      tagsArray = [filtroRandom()];
    }
  }
  return tagsArray;
};

function idFromPosition(arrayPosition, length) {
  var r = "" + arrayPosition;
  while (r.length < length) {
    r = "0" + r;
  }
  return r;
}

class Producto {
  constructor(keyId) {
    this.imageURL = "https://source.unsplash.com/1600x900/?tshirt";
    this.price = precioRandom(10000);
    this.discount = descuentoRandom(14);
    this.name = nombreRandom();
    this.tags = generarTagsArray();
    this.id = idFromPosition(keyId, 8);
  }
}

let array = [];
for (let i = 0; i <= 20; i++) {
  array[i] = new Producto(i);
}
console.log(array);
export default array;
