import { Product } from "./types";

export function CheckIsSelected(selectedProducts: Product[], product: Product) {
   return selectedProducts.some(item => item.id === product.id);
}

export function formatPrince(price: number) {
   const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
   });

   return formatter.format(price);
}
