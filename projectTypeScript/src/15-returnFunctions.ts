// Para ver el resultado de los logs (F1 + Quokka Start)
// Cada bloque es una funcion anonima autoejecutable
(()=>{
  // Funcion que recibe arreglo de numeros y retorna numero
  const calcTotal = (prices: number[]): number => {
    let total: number = 0;
    total = prices.reduce((total, price) => total + price, 0);
    return total;
  };

  const res = calcTotal([10, 20, 30, 40]);
  console.log(res);

  // Funcion que recibe arreglo de numeros y no retorna nada
  const printTotal = (prices: Array<number>): void => {
    console.log(`El total es: ${calcTotal(prices)}`);
  };

  printTotal([10, 20, 20, 10]);
})();
