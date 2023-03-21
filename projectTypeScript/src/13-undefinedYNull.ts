// Para ver el resultado de los logs (F1 + Quokka Start)
// Cada bloque es una funcion anonima autoejecutable
(()=>{
  // let myNumber: number;=undefined // Error
  // let myString: string;=null; // Error
  let myNull:null=null;
  let myUndefined:undefined=undefined;

  let myNumber:number| null=null;
  myNumber=123;
  console.log(myNumber);

  let myString:string| undefined=undefined;
  myString='Hello';
  console.log(myString);

  function hiV2(name: string | null){
    let hello= 'Hi ';

    if(name){
      hello += name;
    }else{
      hello += 'Guest';
    }

    console.log(hello);
  }

  hiV2('Juan');
  hiV2(null);

  function hiV1(name:string | null){
    let hello= 'Hi ';

    hello+=name?.toLocaleLowerCase() || 'nobody'
    // name ? (hello += name) : (hello += 'nobody');
    console.log(hello)
  }

  hiV1('Juan');
  hiV1(null);

})();
