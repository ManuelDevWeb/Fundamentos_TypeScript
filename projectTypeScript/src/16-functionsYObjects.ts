// Para ver el resultado de los logs (F1 + Quokka Start)
// Cada bloque es una funcion anonima autoejecutable
(()=>{
  // Funcion que recibe como parametro un objeto y no retorna nada
  const login=(data: {email:string, password: string}):void=>{
    const {email, password}=data;
    console.log(`El email es: ${email} y el password es: ${password}`);
  }
  login({email: 'manueldeveloper17@gmail.com', password: '12345'})


  type ShirtSizes='S' | 'M' | 'L' | 'XL';
  const products:any[]=[];

  // Funcion que recibe como parametro un objeto y no retorna nada
  const addProduct=(data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: ShirtSizes
  }):void=>{
    products.push(data);
  }

  addProduct({
    title: 'Remera fachera facherita',
    createdAt: new Date(),
    stock: 10,
    size: 'M',
  });
  addProduct({ title: 'Gorra', createdAt: new Date(), stock: 15 });

})();
