import { addProduct, calcStock, products } from "./product.service";

addProduct({
  title: 'Camiseta',
  createdAt: new Date(),
  stock: 10,
  size: 'M'
})
addProduct({
  title: 'Gorra',
  createdAt: new Date(),
  stock: 15,
});

console.log(products);
console.log(calcStock());
