// Para ver el resultado de los logs (F1 + Quokka Start)
// Cada bloque es una funcion anonima autoejecutable
(()=>{
  // Se aconseja no utilizar el tipo any
  let myDynamicVariable:any;
  myDynamicVariable=10;
  myDynamicVariable=true;
  myDynamicVariable={};
  myDynamicVariable=undefined;
  myDynamicVariable=null;

  myDynamicVariable='Hello';
  // Transformar de un tipo a otro
  const respuesta=(myDynamicVariable as string).toLowerCase();
  console.log(respuesta);

  myDynamicVariable=10;
  // Transformar de un tipo a otro
  const respuesta2=<number>myDynamicVariable+10;
  console.log(respuesta2);
  const respuesta3=(<number>myDynamicVariable).toFixed();
  console.log(respuesta3);
})();
