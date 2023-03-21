import { Product } from "./product.model";

export const products:Product[]=[];

export const addProduct=(data:Product):void=>{
  products.push(data);
}

export const calcStock=():number=>{
  let total=0;

  total=products.reduce((acc, product)=>acc+product.stock, 0)

  return total;
}
