export type ShirtSizes='S'|'M'|'L'|'XL';

export type Product={
  title: string;
  createdAt: Date;
  stock: number;
  size?: ShirtSizes;
}
