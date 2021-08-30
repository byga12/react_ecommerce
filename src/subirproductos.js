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
      nombre = "Green sweater L/XL";
      break;
    case 2:
      nombre = "Short dress S/M/L";
      break;
    case 3:
      nombre = "Black t-shirt S/M";
      break;
    case 4:
      nombre = "Running black & white trainers";
      break;
    case 5:
      nombre = "Short";
      break;
    case 6:
      nombre = "White hoodie XS/S/M/L/XL";
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
      filtro = "New";
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
      filtro = "Summer 2020 edition";
      break;
    case 6:
      filtro = "Winter edition";
      break;
    default:
      break;
  }

  return filtro;
};

const generarTagsArray = () => {
  const numero = Math.ceil(Math.random() * 6);
  let tagsArray = [];
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
    this.discount = descuentoRandom(8);
    this.name = nombreRandom();
    this.tags = generarTagsArray();
    this.id = idFromPosition(keyId, 8);
    if (this.discount) {
      this.tags.push("On sale");
    }
  }
}

let array = [];
for (let i = 0; i <= 20; i++) {
  array[i] = new Producto(i);
}
console.log(array);
export default array;
