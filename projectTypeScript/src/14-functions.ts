// Para ver el resultado de los logs (F1 + Quokka Start)
// Cada bloque es una funcion anonima autoejecutable
(()=>{
  type Sizes='S' | 'M' | 'L' | 'XL';

  const createProductoToJson=(title: string, createdAt: Date, stock: number, size?:Sizes )=>{
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const prod1=createProductoToJson('Camisa', new Date(), 10, 'S');
  console.log(prod1);
  const prod2=createProductoToJson('Pantalon', new Date(), 20);
  console.log(prod2);
  const prod3=createProductoToJson('Zapatos', new Date(), 30, 'L');
  console.log(prod3);
  const prod4=createProductoToJson('Gorra', new Date(), 40);
  console.log(prod4);
})();
