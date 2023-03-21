// Para ver el resultado de los logs (F1 + Quokka Start)
// Cada bloque es una funcion anonima autoejecutable
(()=>{
  // Alias
  type UserID= string | number | boolean;

  let userId: UserID;

  // Alias
  type ShirtSize = 'S' | 'M' | 'L' | 'XL';

  let shirtSize: ShirtSize;
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  // shirtSize = 'XXL'; // Error

  function greeting(userId: UserID, shirtSize: ShirtSize) {
    if (typeof userId === 'string') {
      console.log(`Hello ${userId}!, your shirt size is ${shirtSize}`);
    }
  }

  greeting('123', 'S');
})();
