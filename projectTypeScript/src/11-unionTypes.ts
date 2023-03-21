// Para ver el resultado de los logs (F1 + Quokka Start)
// Cada bloque es una funcion anonima autoejecutable
(()=>{
  let userId:string|number;
  userId=10;
  userId='Hola';

  function greeting(myText: string|number){
    if(typeof myText==='string'){
      console.log(myText.toUpperCase());
    }else{
      console.log(myText.toFixed());
    }
  }

  greeting('Hello');
  greeting(10);
})();
