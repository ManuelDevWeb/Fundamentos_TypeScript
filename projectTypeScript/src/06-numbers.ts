// Para ver el resultado de los logs (F1 + Quokka Start)
// Cada bloque es una funcion anonima autoejecutable
(()=>{
  let productPrice=100;
  productPrice=200;
  console.log(productPrice);

  let customerAge: number = 28;
  // customerAge=customerAge+'1';
  customerAge=customerAge+1;
  console.log(customerAge);

  let productInStock: number=11;
  console.log('productInStock',productInStock);
  if(productInStock > 10){
    console.log('Is greater')
  }

  let discount:number=parseInt('120');
  console.log('discount',discount);
  if(discount<=200){
    console.log('Apply discount')
  }else{
    console.log('Not apply discount')
  }

  let hex=0xfff;
  console.log('hex',hex);
  let bin=0b1010;
  console.log('bin',bin);
})();
