import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Prisma } from '@prisma/client';


@Injectable()
export class ProductsService {
    constructor(private readonly prisma: PrismaService) { }
    async create(dto: CreateProductDto) {
        return this.prisma.product.create({
            data: {
                name: dto.name,
                description: dto.description ?? null,
                price: new Prisma.Decimal(dto.price),
                sku: dto.sku,
                stock: dto.stock ?? 0,
                isActive: dto.isActive ?? true,
                categoryId: dto.categoryId,
            }
        });
    }

    async findAll() {
        return this.prisma.product.findMany({
            orderBy: { id: 'asc' },
        });
    }
    async findOne(id: string) {
        const product = await this.prisma.product.findUnique({ where: { id } });
        if (!product) throw new NotFoundException(`Product ${id} no existe`);
        return product;
    }
    async update(id: string, dto: UpdateProductDto) {
        await this.findOne(id); // asegura 404 si no existe
        return this.prisma.product.update({
            where: { id },
            data: dto,
        });
    }
    async remove(id: string) {
        await this.findOne(id);
        await this.prisma.product.delete({ where: { id } });
    }

}
