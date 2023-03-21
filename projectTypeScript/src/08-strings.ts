// Para ver el resultado de los logs (F1 + Quokka Start)
// Cada bloque es una funcion anonima autoejecutable
(()=>{
  let productTitle='My amazing product';
  // productTitle=null;
  // productTitle=()=>{};
  // productTitle=123;
  productTitle='My new amazing product';
  console.log('productTitle', productTitle);

  const productDescription="I'm the best developer in the world";

  const summary=`
    Product Title: ${productTitle}
    Product Description: ${productDescription}
  `
  console.log('summary', summary);

  const mySting:string='Hello World';
  console.log('mySting', mySting);
})();
