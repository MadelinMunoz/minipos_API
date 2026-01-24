import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';


@Injectable()
export class ProductsService {
    private products: Product[] = [];
    private nextId = 1;
    create(dto: CreateProductDto): Product {
        const newProduct: Product = {
            id: this.nextId++,
            name: dto.name,
            brand: dto.brand,
            price: dto.price,
            stock: dto.stock,
            discount: dto.discount,
            isActive: dto.isActive ?? true,
        };
        this.products.push(newProduct);
        return newProduct;
    }
    findAll(): Product[] {
        return this.products;
    }
    findOne(id: number): Product {
        const found = this.products.find(c => c.id === id);
        if (!found) throw new NotFoundException(`Product ${id} no existe`);
        return found;
    }
    update(id: number, dto: UpdateProductDto): Product {
        const product = this.findOne(id);
        Object.assign(product, dto);
        return product;
    }
    remove(id: number): void {
        const idx = this.products.findIndex(c => c.id === id);
        if (idx === -1) throw new NotFoundException(`Product ${id} no existe`);
        this.products.splice(idx, 1);
    }

}
