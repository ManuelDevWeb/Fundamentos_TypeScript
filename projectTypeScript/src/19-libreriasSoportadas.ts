// Instalar la libreria: npm install date-fns —save

// Importando libreria
import { subDays, format } from "date-fns";

const date=new Date(2000,5,26);
const rta=subDays(date,30);
const str=format(rta, 'dd/MM/yyyy');

console.log(str);
