export class Product {
  id: string;            // UUID
  name: string;
  description?: string;
  price: number;         // Decimal en Prisma, number en TS
  sku: string;
  stock: number;
  isActive: boolean;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
}