// Para ver el resultado de los logs (F1 + Quokka Start)
// Cada bloque es una funcion anonima autoejecutable
(()=>{
  let isEnable=true;
  // isEnable='asd';
  // isEnable=123
  isEnable=false;

  let isNew: boolean = true;
  console.log('isNew',isNew);
  isNew=false;
  console.log('isNew',isNew);

  const random=Math.random();
  console.log('random',random);
  isNew=random>=0.5;
  console.log('isNew',isNew);
})();
