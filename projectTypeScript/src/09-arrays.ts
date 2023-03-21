// Para ver el resultado de los logs (F1 + Quokka Start)
// Cada bloque es una funcion anonima autoejecutable
(()=>{
  let prices=[10, 20, 30, 'hola', true];
  prices.push('ada');
  prices.push(true);
  // prices.push({});
  prices.push(40);

  let products=['TV', 'Radio', 'Laptop', 'Tablet'];
  products.push('Smartphone');
  console.log(products);

  // A continuacion se muestran dos formas de definir el tipo de un array

  let mixed: Array<string|number|boolean>=[];
  mixed.push('Hello');
  mixed.push(123);
  mixed.push(true);
  // mixed.push({});

  let numbers: (number)[]=[1,2,3,4];
  let newNumbers= numbers.map((number)=>number*2);
  console.log(newNumbers);
})()
