// Para ver el resultado de los logs (F1 + Quokka Start)
// Cada bloque es una funcion anonima autoejecutable
(() => {
  type ShirtSizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: ShirtSizes;
  };

  const products: Product[] = [];

  const addProduct = (data: Product): void => {
    products.push(data);
  };

  addProduct({
    title: 'Remera fachera facherita',
    createdAt: new Date(),
    stock: 10,
    size: 'M',
  });
  addProduct({
    title: 'Gorra',
    createdAt: new Date(),
    stock: 15,
  });

  const printProduct=({title, createdAt, stock, size}:Product)=>{
    console.log(title)
    console.log(createdAt)
    console.log(stock)
    console.log(size)
  }

  printProduct(products[0])
})();
